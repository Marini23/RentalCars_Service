import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, loadMoreAdverts } from './advertsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    advertsItems: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.advertsItems = action.payload;
      })
      .addCase(loadMoreAdverts.pending, handlePending)
      .addCase(loadMoreAdverts.rejected, handleRejected)
      .addCase(loadMoreAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.advertsItems = [...state.advertsItems, ...action.payload];
      }),
});

export const { resetAdverts } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
