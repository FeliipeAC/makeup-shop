import React, { useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const { data, isFetching, error } = useFetch<any[]>();

  return <div></div>;
}
