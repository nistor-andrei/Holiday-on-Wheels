import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    fuelType: "",
    transmisionType: "",
    vehicleType: "",
  },
  reducers: {
    setFuelType: (state, action: PayloadAction<string>) => {
      state.fuelType = action.payload;
    },
    setTransmisionType: (state, action: PayloadAction<string>) => {
      state.transmisionType = action.payload;
    },
    setVehicleType: (state, action: PayloadAction<string>) => {
      state.vehicleType = action.payload;
    },
  },
});

export const { setFuelType, setTransmisionType, setVehicleType } =
  filterSlice.actions;
export default filterSlice.reducer;
