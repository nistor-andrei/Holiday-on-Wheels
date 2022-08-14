import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  fuelType: "",
  transmisionType: "",
  vehicleType: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
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
    resetFilters: () => initialState,
  },
});

export const { setFuelType, setTransmisionType, setVehicleType, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
