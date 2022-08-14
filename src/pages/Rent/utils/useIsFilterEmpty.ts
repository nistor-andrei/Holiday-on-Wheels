import { useAppSelector } from "../../../rtk-store/hooks";

// ignore react hook rule
export const useIsFilterEmpty = () => {
  const filterCars = useAppSelector((state) => state.filterSlice);
  return Object.values(filterCars).every((value) => value === "");
};
