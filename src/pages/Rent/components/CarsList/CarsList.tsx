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

  return (
    <section className={style.list}>
      {isFilterEmpty &&
        data?.map((car, index) => {
          return <CarCard car={car} key={index} />;
        })}
      {filterCars.vehicleType !== "" &&
        filterByClassType?.map((car, index) => {
          return <CarCard car={car} key={index} />;
        })}
      {filterCars.fuelType !== "" &&
        filterByFuelType?.map((car, index) => {
          return <CarCard car={car} key={index} />;
        })}
      {filterCars.transmisionType !== "" &&
        filterByTransmissionType?.map((car, index) => {
          return <CarCard car={car} key={index} />;
        })}
    </section>
  );
};

export default CarsList;
