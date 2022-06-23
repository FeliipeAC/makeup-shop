import Pagination from "@mui/material/Pagination";
import { useState } from "react";

type Props = {
  totalPages: number;
  currentPage: number;
  handlePage: any;
};

export function Paginate({ totalPages, currentPage, handlePage }: Props) {
  return (
    <div
      style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        size="large"
        onChange={handlePage}
      />
    </div>
  );
}
