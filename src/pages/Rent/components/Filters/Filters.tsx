import { ChangeEvent, FC, useCallback, useState } from "react";
import { PriceRange, VehicleType, TransmisionType } from "./components";
import style from "./filters.module.css";

export interface IActiveFilters {
  changeCounterFilters: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Filters: FC = () => {
  // count how many filters are active
  const [activeFilters, setActiveFilters] = useState<number>(0);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setActiveFilters((prev) => prev + 1);
      } else {
        setActiveFilters((prev) => prev - 1);
      }
    },
    [setActiveFilters]
  );

  return (
    <div className={style.container}>
      <h3 className={style.title}>
        Filters
        {activeFilters > 0 && (
          <span className={style.count}>{activeFilters}</span>
        )}
      </h3>
      <VehicleType changeCounterFilters={handleChange} />
      <PriceRange changeCounterFilters={handleChange} />
      <TransmisionType changeCounterFilters={handleChange} />
    </div>
  );
};

export default Filters;
