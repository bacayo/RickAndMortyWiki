import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCharacters } from '../thunks';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface InitialState {
  isLoading: boolean;
  error: string | undefined;
  character: Character[];
}

const initialState: InitialState = {
  isLoading: false,
  error: undefined,
  character: [],
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCharacters.fulfilled, (state, action: PayloadAction<Character[]>) => {
      state.isLoading = false;
      state.character = action.payload;
    });
    builder.addCase(getAllCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default characterSlice.reducer;
