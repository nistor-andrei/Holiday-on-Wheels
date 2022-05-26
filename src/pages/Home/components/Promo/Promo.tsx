import { FC } from "react";
import car from "../../../../assets/old-bmw-m4-car-png-image-bmw-m4-11563262322mazx5vhbo6.png";
import direction from "../../../../assets/direction.svg";
import style from "./promo.module.css";

const Promo: FC = () => {
  return (
    <section>
      <div className={style.description}>
        <h2>How it works?</h2>
        <p>Choose your car then contact us</p>
        <img src={car} alt="car" className={style.car} />
      </div>
      <div className={style.direction}>
        <img src={direction} alt="direction" />
      </div>
    </section>
  );
};

export default Promo;
