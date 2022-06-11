import { Skeleton } from "@mui/material";
import { FC } from "react";
import style from "./skeletoncard.module.css";

const SkeletonCard: FC = () => {
  return (
    <div className={style.skeletonContainer}>
      <div className={style.card}>
        <Skeleton
          variant="rectangular"
          width={210}
          height={118}
          sx={{
            backgroundColor: "grey.700",
            margin: "2rem 0",
            borderRadius: "10px",
          }}
        />
        <Skeleton
          height={20}
          style={{ marginBottom: 6 }}
          sx={{ backgroundColor: "grey.700" }}
        />
        <Skeleton height={20} sx={{ backgroundColor: "grey.700" }} />
        <hr />
        <Skeleton
          height={20}
          sx={{ backgroundColor: "grey.700", margin: "1rem 0" }}
        />
      </div>
      <div className={style.card}>
        <Skeleton
          variant="rectangular"
          width={210}
          height={118}
          sx={{
            backgroundColor: "grey.700",
            margin: "2rem 0",
            borderRadius: "10px",
          }}
        />
        <Skeleton
          height={20}
          style={{ marginBottom: 6 }}
          sx={{ backgroundColor: "grey.700" }}
        />
        <Skeleton height={20} sx={{ backgroundColor: "grey.700" }} />
        <hr />
        <Skeleton
          height={20}
          sx={{ backgroundColor: "grey.700", margin: "1rem 0" }}
        />
      </div>
      <div className={style.card}>
        <Skeleton
          variant="rectangular"
          width={210}
          height={118}
          sx={{
            backgroundColor: "grey.700",
            margin: "2rem 0",
            borderRadius: "10px",
          }}
        />
        <Skeleton
          height={20}
          style={{ marginBottom: 6 }}
          sx={{ backgroundColor: "grey.700" }}
        />
        <Skeleton height={20} sx={{ backgroundColor: "grey.700" }} />
        <hr />
        <Skeleton
          height={20}
          sx={{ backgroundColor: "grey.700", margin: "1rem 0" }}
        />
      </div>
      <div className={style.card}>
        <Skeleton
          variant="rectangular"
          width={210}
          height={118}
          sx={{
            backgroundColor: "grey.700",
            margin: "2rem 0",
            borderRadius: "10px",
          }}
        />
        <Skeleton
          height={20}
          style={{ marginBottom: 6 }}
          sx={{ backgroundColor: "grey.700" }}
        />
        <Skeleton height={20} sx={{ backgroundColor: "grey.700" }} />
        <hr />
        <Skeleton
          height={20}
          sx={{ backgroundColor: "grey.700", margin: "1rem 0" }}
        />
      </div>
    </div>
  );
};

export default SkeletonCard;
