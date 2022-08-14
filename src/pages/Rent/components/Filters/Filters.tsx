import { FC, useMemo } from "react";
import { useAppSelector } from "../../../../rtk-store/hooks";
import { countActiveFilters } from "../../utils/countActiveFilters";
import { useIsFilterEmpty } from "../../utils/useIsFilterEmpty";
import { FuelType, VehicleType, TransmisionType } from "./components";
import style from "./filters.module.css";

const Filters: FC = () => {
  // count how many filters are active
  const countFilters = useAppSelector((select) => select.filterSlice);
  const isFilterEmpty = useIsFilterEmpty();

  const activeFiltersVale = useMemo(
    () => countActiveFilters(countFilters),
    [countFilters]
  );

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        Filters
        {!isFilterEmpty && (
          <span className={style.count}>{activeFiltersVale}</span>
        )}
      </h3>
      <VehicleType />
      <FuelType />
      <TransmisionType />
    </div>
  );
};

export default Filters;
