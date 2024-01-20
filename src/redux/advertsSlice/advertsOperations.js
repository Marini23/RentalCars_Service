import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://65a8f6a7219bfa37186809d5.mockapi.io/api/adverts';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const url = new URL('/catalog', axios.defaults.baseURL);
      url.searchParams.append('page', 1);
      url.searchParams.append('limit', 12);
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loadMoreAdverts = createAsyncThunk(
  'adverts/loadMore',

  async (page, thunkAPI) => {
    try {
      const url = new URL('/catalog', axios.defaults.baseURL);
      url.searchParams.append('page', page);
      url.searchParams.append('limit', 12);
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
