import { ICars } from "../components/CarCard/types";
import { Dispatcher } from "../utils/setterTypes";

export const fetchData = (
  setData: Dispatcher<ICars[]>,
  setLoading: Dispatcher<boolean>
) => {
  const url = "http://localhost:3001/cars";
  (async () => {
    const response = await fetch(url);
    const data: ICars[] = await response.json();
    setLoading(false);
    setData(data);
  })();
};
