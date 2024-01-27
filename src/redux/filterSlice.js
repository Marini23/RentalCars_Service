import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    carBrand: ``,
    priceHour: ``,
    carMileageMin: 0,
    carMileageMax: 0,
  },

  reducers: {
    changeCarBrand(state, action) {
      state.carBrand = action.payload;
    },
    changePriceHour(state, action) {
      state.priceHour = action.payload;
    },

    resetPriceHour(state, action) {
      state.priceHour = 0;
    },
    changeCarMileageMin(state, action) {
      state.carMileageMin = action.payload;
    },
    resetCarMileageMin(state, action) {
      state.carMileageMin = 0;
    },
    changeCarMileageMax(state, action) {
      state.carMileageMax = action.payload;
    },
    resetCarMileageMax(state, action) {
      state.carMileageMin = 0;
    },
  },
});

export const {
  changeCarBrand,
  changePriceHour,
  resetPriceHour,
  changeCarMileageMin,
  resetCarMileageMin,
  changeCarMileageMax,
  resetCarMileageMax,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
