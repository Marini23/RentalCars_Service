import { configureStore } from '@reduxjs/toolkit';

import { advertsReducer } from './advertsSlice/advertsSlice';
import { filterReducer } from './filterSlice';
import { favoritesReducer } from './favoritesSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
  },
});
