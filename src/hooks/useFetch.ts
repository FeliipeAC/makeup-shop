import { useEffect, useState } from "react";

import axios from "axios";

export type ParamsFetch = {
  product_type: string;
  product_category: string;
  product_tags: string[];
  brand: string;
  price_greater_than: number;
  product_tprice_less_thanype: number;
  rating_greater_than: number;
  rating_less_than: number;
};

export function useFetch<T = unknown>(params?: ParamsFetch) {
  const baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json";

  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(baseUrl, {
        params,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, error, isFetching };
}
