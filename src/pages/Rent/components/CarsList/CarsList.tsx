import { useEffect, useState } from "react";
import { fetchData } from "../../../../api/api";
import { ICars } from "../../../../components/CarCard/types";
import { defaultCars } from "../../../Home/components/CarSlider/types";

const CarsList = () => {
  const [data, setData] = useState<ICars[]>(defaultCars);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setData, setLoading);
  }, []);

  return (
    <div>
      <h1>CarsList</h1>
    </div>
  );
};

export default CarsList;
