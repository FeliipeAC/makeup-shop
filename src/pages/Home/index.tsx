import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useFetch } from "../../hooks/useFetch";
import { CardMakeup } from "../../components/Card";
import { Makeup } from "../../utils/models/makeup.type";
import { Paginate } from "../../components/Paginate";
import { CardShimmer } from "../../components/CardShimmer";

export function Home() {
  const { data, isFetching, error } = useFetch<Makeup[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const itensPerPage = 20;

  function handleCurrentPage(event: React.ChangeEvent<unknown>, value: number) {
    setCurrentPage(value);
  }

  return (
    <>
      {isFetching && (
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
      )}

      {data && (
        <div>
          <Grid
            container
            spacing={{ xs: 8 }}
            columns={{ xs: 6, lg: 12, sm: 12, md: 12 }}
          >
            {data
              ?.slice(
                (currentPage - 1) * itensPerPage,
                currentPage * itensPerPage
              )
              .map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
                  <CardMakeup data={item} />
                </Grid>
              ))}
          </Grid>

          <Paginate
            totalPages={data ? Math.floor(data.length / itensPerPage) : 0}
            currentPage={currentPage}
            handlePage={handleCurrentPage}
          />
        </div>
      )}
    </>
  );
}
