import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    carBrand: ``,
    priceHour: null,
    carMileageMin: null,
    carMileageMax: null,
  },

  reducers: {
    changeFilter(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilter(state, action) {
      return (state = {
        carBrand: ``,
        priceHour: null,
        carMileageMin: null,
        carMileageMax: null,
      });
    },
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
