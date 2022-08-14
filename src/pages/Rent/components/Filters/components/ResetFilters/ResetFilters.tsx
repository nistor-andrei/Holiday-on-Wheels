import { FC } from "react";
import { resetFilters } from "../../../../../../rtk-store/actions/filterSlice";
import { useAppDispatch } from "../../../../../../rtk-store/hooks";
import style from "./resetfilters.module.css";

const ResetFilters: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(resetFilters())} className={style.resetBtn}>
      Reset Filters
    </button>
  );
};

export default ResetFilters;
