import { useEffect, useState } from "react";

import { Makeup } from "../utils/models/makeup.type";
import { ApiService } from "../services/api-service";

export function useFetch<T = unknown>() {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    ApiService()
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
  }, []);

  return { data, error, isFetching };
}
