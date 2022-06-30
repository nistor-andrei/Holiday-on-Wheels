import { CarCard } from "../../../../components";
import { useGetCarsQuery } from "../../../../rtk-store/services/cars";
import style from "./carslist.module.css";

const CarsList = () => {
  const { data } = useGetCarsQuery();
  return (
    <section className={style.list}>
      {data?.map((car) => {
        return <CarCard car={car} key={car.id} />;
      })}
    </section>
  );
};

export default CarsList;
