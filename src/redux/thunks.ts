import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Character } from './slices/characterSlice';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

export const getAllCharacters = createAsyncThunk<Character[]>(
  'characterSlice/getAllCharacters',
  async () => {
    const response = await axios.get('character');
    const data = await response.data;
    return data.results;
  }
);
