import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.advertsItems;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilterCarBrand = state => state.filter.carBrand;

export const selectFilterPriceHour = state => state.filter.priceHour;

export const selectFavorites = state => state.favorites.favoritesItems;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilterCarBrand],
  (adverts, filter) => {
    return adverts.filter(advert =>
      advert.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
