import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.advertsItems;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilterCarBrand = state => state.filter.carBrand;

export const selectFilterPriceHour = state => state.filter.priceHour;

export const selectFilterMielageMin = state => state.filter.carMileageMin;

export const selectFilterMielageMax = state => state.filter.carMileageMax;

export const selectFilters = state => state.filter;

export const selectFavorites = state => state.favorites.favoritesItems;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilterCarBrand],
  (adverts, filter) => {
    return adverts.filter(advert =>
      advert.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filter) => {
    return adverts
      .filter(advert =>
        filter.carBrand ? advert.make === filter.carBrand : true
      )
      .filter(advert =>
        filter.priceHour
          ? advert.rentalPrice.replace('$', '') > filter.priceHour
          : true
      )
      .filter(advert =>
        filter.carMileageMin ? advert.mielage > filter.carMileageMin : true
      )
      .filter(advert =>
        filter.carMileageMax ? advert.mielage < filter.carMileageMax : true
      );
  }
);
