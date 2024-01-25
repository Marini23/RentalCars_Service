import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    carBrand: ``,
    priceHour: ``,
    carMileage: ``,
  },

  reducers: {
    changeCarBrand(state, action) {
      state.carBrand = action.payload;
    },
    changePriceHour(state, action) {
      state.priceHour = action.payload;
    },

    resetPriceHour(state, action) {
      state.priceHour = '';
    },
    changeCarMileage(state, action) {
      state.carMileage = action.payload;
    },
    resetCarMileage(state, action) {
      state.carMileage = '';
    },
  },
});

export const {
  changeCarBrand,
  changePriceHour,
  resetPriceHour,
  changeCarMileage,
  resetCarMileage,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
