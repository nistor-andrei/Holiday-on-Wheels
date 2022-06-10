import {FC} from "react";
import {PriceRange, VehicleType} from "./components";
import style from "./filters.module.css";

const Filters: FC = () => {
    return (
        <div className={style.container}>
            <h3 className={style.title}>Filters</h3>
            <VehicleType/>
            <PriceRange/>
        </div>
    );
};

export default Filters;
