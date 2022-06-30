import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICars } from "../../components/CarCard/types";

export const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  tagTypes: ["Cars"],
  endpoints: (builder) => ({
    getCars: builder.query<ICars[], void>({
      query: () => "cars",
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
