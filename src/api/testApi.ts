import { ICars } from "../pages/Home/components/CarSlider/types";

export const api = (fetch: (arg0: string) => Promise<{ json: () => any }>) => {
  return fetch("http://localhost:3001/cars")
    .then((res: { json: () => any }) => res.json())
    .then((data: ICars[]) => {
      return data;
    });
};
