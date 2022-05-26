import { FC, ReactNode } from "react";
import {
  CarBrand,
  listOfCarBrand,
} from "../../../../utils/listOfCarBrand";
import style from "./mostPopular.module.css";

const MostPopular: FC = () => {
  return (
    <section className={style.mostPopular}>
      <div className={style.mostPopular__text}>
        <h2>
          Most popular car rental <span>deals</span>
        </h2>
        <p>
          Choose the right car for you here in the fewest possible
          steps,We offer a large number of cars, different classes and
          for any of your needs,business,romantic and family trip
        </p>
      </div>
      <ul className={style.list}>
        {listOfCarBrand.map(
          (carBrand: CarBrand, index): ReactNode => {
            return (
              <li key={index}>
                <img src={carBrand.image} alt={carBrand.name} />
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default MostPopular;
