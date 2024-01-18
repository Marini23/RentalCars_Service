import { configureStore } from '@reduxjs/toolkit';

import { advertsReducer } from './advertsSlice/advertsSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    // filter: filterReducer,
  },
});
