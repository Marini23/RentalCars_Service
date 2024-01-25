import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    carBrand: ``,
    priceHour: ``,
    carMileageMin: ``,
    carMileageMax: ``,
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
    changeCarMileageMin(state, action) {
      state.carMileageMin = action.payload;
    },
    resetCarMileageMin(state, action) {
      state.carMileageMin = '';
    },
    changeCarMileageMax(state, action) {
      state.carMileageMax = action.payload;
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
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
