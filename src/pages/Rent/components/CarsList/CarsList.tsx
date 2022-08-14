import { useMemo } from "react";
import { CarCard } from "../../../../components";
import { useAppSelector } from "../../../../rtk-store/hooks";
import { useGetCarsQuery } from "../../../../rtk-store/services/cars";
import { useIsFilterEmpty } from "../../utils/useIsFilterEmpty";
import style from "./carslist.module.css";

const CarsList = () => {
  const { data } = useGetCarsQuery();
  const filterCars = useAppSelector((state) => state.filterSlice);
  const isFilterEmpty = useIsFilterEmpty();
  // filter data by filterCars
  const filterByClassType = data?.filter((car) => {
    return car.classType === filterCars.vehicleType;
  });

  const filterByFuelType = data?.filter((car) => {
    return car.fuelType === filterCars.fuelType;
  });
  const filterByTransmissionType = data?.filter((car) => {
    return car.gearbox === filterCars.transmisionType;
  });

  // list the cars by filters
  const filteredCars = useMemo(() => {
    if (isFilterEmpty) {
      return data;
    } else if (filterCars.vehicleType) {
      return filterByClassType;
    } else if (filterCars.fuelType) {
      return filterByFuelType;
    } else if (filterCars.transmisionType) {
      return filterByTransmissionType;
    }
  }, [
    data,
    filterByClassType,
    filterByFuelType,
    filterByTransmissionType,
    filterCars.fuelType,
    filterCars.transmisionType,
    filterCars.vehicleType,
    isFilterEmpty,
  ]);

  return (
    <section className={style.list}>
      {filteredCars?.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </section>
  );
};

export default CarsList;
