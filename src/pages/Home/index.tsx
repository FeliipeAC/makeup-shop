import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useFetch } from "../../hooks/useFetch";
import { CardMakeup } from "../../components/Card";
import { Makeup } from "../../utils/models/makeup.type";
import { Paginate } from "../../components/Paginate";
import { CardShimmer } from "../../components/CardShimmer";
import { Filters } from "../../components/Filters";
import imageError from "../../assets/images/undraw_makeup_artist_rxn8.svg";

import "./styles.css";
import { ApiService, ParamsFetch } from "../../services/api-service";

export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [data, setData] = useState<Makeup[] | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getData();
  }, []);

  function handleCurrentPage(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }

  function getData(params?: ParamsFetch) {
    ApiService(params)
      .then((response) => {
        const orderedData = response.data.sort(
          (a: Makeup, b: Makeup) => b.rating - a.rating
        );
        setData(orderedData);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }

  function filterItems(params: any) {
    setIsFetching(true);
    setData([]);
    let filters: ParamsFetch | undefined;

    if (params) {
      filters = {
        brand: params?.brand?.id,
        product_category: params?.category?.id,
        product_type: params?.type?.id,
      };
    }

    getData(filters);
  }

  return (
    <>
      {data && (
        <div>
          <Filters handleFilter={filterItems} />

          <p className="total-results">{data?.length} results found</p>
          <Grid
            container
            spacing={{ xs: 8 }}
            columns={{ xs: 6, lg: 12, sm: 12, md: 12 }}
          >
            {data
              ?.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                  <CardMakeup data={item} />
                </Grid>
              ))}
          </Grid>

          {data.length > itemsPerPage && (
            <Paginate
              totalPages={data ? Math.floor(data.length / itemsPerPage) : 0}
              currentPage={currentPage}
              handlePage={handleCurrentPage}
            />
          )}
        </div>
      )}

      {isFetching && (
        <div style={{ paddingTop: "64px" }}>
          <Grid
            container
            spacing={{ xs: 8 }}
            columns={{ xs: 6, lg: 12, sm: 12, md: 12 }}
          >
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={item}>
                <CardShimmer />
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {!isFetching && (error || data?.length === 0) && (
        <div className="container-error">
          <img src={imageError} alt="Error" />
          <h1>
            Ops!{" "}
            {data?.length === 0 ? "No results found." : "Something went wrong."}
          </h1>
        </div>
      )}
    </>
  );
}
