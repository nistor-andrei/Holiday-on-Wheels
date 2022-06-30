import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { carsApi } from "./services/cars";

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
