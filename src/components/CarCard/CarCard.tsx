import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import style from "./carcard.module.css";
import { Link } from "react-router-dom";
import { ICars } from "./types";
import gearbox from "../../assets/gearbox.svg";

const CarCard = ({ car }: { car: ICars }) => {
  return (
    <div className={style.card}>
      <div className={style.card__car}>
        <img src={car.img} alt={car.model} />
        <p>{car.model}</p>
        <div className={style.info}>
          <div className={style.info__left}>
            <p>
              <img src={gearbox} alt="gearbox" />
              {car.gearbox}
            </p>
            <p>
              <LocalGasStationIcon />
              {car.fuelType}
            </p>
          </div>
          <div className={style.info__right}>
            <p>
              <SpeedIcon />
              {car.HP}HP
            </p>
            <p>
              <AirlineSeatReclineExtraIcon />
              {car.seats}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={style.price}>
        <p>${car.price}/per day</p>
        <Link to={`/car/${car.id}`}>Rent now &#8594;</Link>
      </div>
    </div>
  );
};

export default CarCard;
