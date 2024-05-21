import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from '../Slice/FavoritesSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
