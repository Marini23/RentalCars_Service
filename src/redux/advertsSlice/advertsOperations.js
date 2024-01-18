import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://65a8f6a7219bfa37186809d5.mockapi.io/api/adverts';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/catalog');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
