import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useFetch } from "../../hooks/useFetch";
import { CardMakeup } from "../../components/Card";
import { Makeup } from "../../utils/models/makeup.type";

export function Home() {
  const { data, isFetching, error } = useFetch<Makeup[]>();

  return (
    <div>
      <Grid
        container
        spacing={{ xs: 8 }}
        columns={{ xs: 6, lg: 12, sm: 12, md: 12 }}
      >
        {data?.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={item.id}>
            <CardMakeup data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
