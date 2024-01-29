import { advertsReducer } from './advertsSlice/advertsSlice';
import { filterReducer } from './filterSlice';
import { favoritesReducer } from './favoritesSlice';
import persistReducer from 'redux-persist/es/persistReducer';

import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
    favorites: persistReducer(persistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export let persistor = persistStore(store);
