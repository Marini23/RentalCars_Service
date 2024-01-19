const { createSlice } = require('@reduxjs/toolkit');

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
    changeCarMileage(state, action) {
      state.carMileage = action.payload;
    },
  },
});

export const { changeCarBrand, changePriceHour, changeCarMileage } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
