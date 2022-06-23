import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import "./styles.css";

export function CardShimmer() {
  return (
    <div className="card-shimmer">
      <Stack alignItems="center" spacing={1}>
        <Skeleton variant="rectangular" width={"100%"} height={234} />
        <Skeleton variant="text" height={12} width="20%"></Skeleton>
        <Skeleton variant="text" height={40} width="65%" />
        <Skeleton variant="text" height={30} width="45%" />
        <Skeleton variant="text" height={20} width="60%" />
        <Skeleton variant="text" height={56} width="25%" />
        <Stack
          alignItems="center"
          spacing={2}
          direction="row"
          style={{ width: "100%" }}
        >
          <Skeleton variant="rectangular" width={"50%"} height={42} />
          <Skeleton variant="rectangular" width={"50%"} height={42} />
        </Stack>
      </Stack>
    </div>
  );
}
