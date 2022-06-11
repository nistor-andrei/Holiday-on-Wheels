import { FC } from "react";
import { PriceRange, VehicleType, TransmisionType } from "./components";
import style from "./filters.module.css";

const Filters: FC = () => {
  const isFiltered = true;

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        Filters
        {isFiltered && <span className={style.count}>2</span>}
      </h3>
      <VehicleType />
      <PriceRange />
      <TransmisionType />
    </div>
  );
};

export default Filters;
