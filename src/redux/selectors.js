import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.advertsItems;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilterCarBrand = state => state.filter.carBrand;

export const selectFilterPriceHour = state => state.filter.priceHour;

export const selectFilterMielageMin = state => state.filter.carMileageMin;

export const selectFilterMielageMax = state => state.filter.carMileageMax;

export const selectFavorites = state => state.favorites.favoritesItems;

export const selectVisibleAdverts = createSelector(
  [selectAdverts, selectFilterCarBrand],
  (adverts, filter) => {
    return adverts.filter(advert =>
      advert.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectVisibleAdverts = createSelector(
//   [
//     selectAdverts,
//     selectFilterCarBrand,
//     selectFilterPriceHour,
//     selectFilterMielageMin,
//     selectFilterMielageMax,
//   ],
//   (
//     adverts,
//     filterCarBrand,
//     filterPriceHour,
//     filterMielageMin,
//     filterMielageMax
//   ) => {
//     return adverts.filter(advert => {
//       const makeMatches =
//         !filterCarBrand ||
//         advert.make.toLowerCase().includes(filterCarBrand.toLowerCase());
//       const hourPriceMatches =
//         !filterPriceHour || advert.hourPrice <= filterPriceHour;
//       const mielageMinMatches =
//         !filterMielageMin || advert.mielage >= filterMielageMin;
//       const mielageMaxMatches =
//         !filterMielageMax || advert.mielage <= filterMielageMax;

//       return (
//         makeMatches &&
//         hourPriceMatches &&
//         mielageMinMatches &&
//         mielageMaxMatches
//       );
//     });
//   }
// );
