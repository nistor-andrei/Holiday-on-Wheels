import { FC, ReactNode } from "react";
import { CarBrand, listOfCarBrand } from "../../../../utils/listOfCarBrand";
import style from "./brands.module.css";

const Brands: FC = () => {
  return (
    <div className={style.brandsContainer}>
      <ul className={style.list}>
        {listOfCarBrand.map((carBrand: CarBrand, index): ReactNode => {
          if (carBrand.name !== "Nissan") {
            return (
              <li key={index}>
                <img src={carBrand.image} alt={carBrand.name} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Brands;
