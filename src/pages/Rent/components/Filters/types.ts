import { ChangeEvent } from "react";

export interface IActiveFilters {
  changeCounterFilters: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICheckboxValue {
  fuelType: string;
  transmisionType: string;
  vehicleType: string;
}
