import { ICars } from "../pages/Home/components/CarSlider/types";
import { Dispatcher } from "../utils/setterTypes";

export const fetchData = (
  setData: Dispatcher<ICars[]>,
  setLoading: Dispatcher<boolean>
) => {
  const url: string = "http://localhost:3001/cars";
  (async () => {
    const response = await fetch(url);
    const data: ICars[] = await response.json();
    setLoading(false);
    setData(data);
  })();
};
