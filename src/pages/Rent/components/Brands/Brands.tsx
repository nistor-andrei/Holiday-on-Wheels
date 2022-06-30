import { FC, ReactNode } from "react";
import { CarBrand, listOfCarBrand } from "../../../../utils/listOfCarBrand";
import style from "./brands.module.css";

const Brands: FC = () => {
  return (
    <div className={style.brandsContainer}>
      <ul className={style.list}>
        {listOfCarBrand
          .filter((carBrand) => carBrand.name !== "Nissan")
          .map((carBrand: CarBrand, index): ReactNode => {
            return (
              <li key={index}>
                <img src={carBrand.image} alt={carBrand.name} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Brands;
