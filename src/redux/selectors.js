// import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.advertsItems;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;
