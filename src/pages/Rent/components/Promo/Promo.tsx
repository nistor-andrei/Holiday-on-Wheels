import { FC } from "react";
import style from "./promo.module.css";

const Promo: FC = () => {
  return (
    <div className={style.description}>
      <h1>
        Most popular car rental{" "}
        <span className="orange-span">deals</span>
      </h1>
      <p className={style.description__paragraph}>
        We offer a large number of cars,different classes and for any
        of your needs,business,romantic and family trip
      </p>
    </div>
  );
};

export default Promo;
