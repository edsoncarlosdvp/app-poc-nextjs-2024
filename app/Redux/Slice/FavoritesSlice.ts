import { IBook } from '@/app/util/interfaces/IBook';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IFavoritesState {
  books: IBook[];
}

const initialState: IFavoritesState = {
  books: ([] = []),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
