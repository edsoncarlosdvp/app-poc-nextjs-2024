'use client';
import { Provider } from 'react-redux';
import { getAllBooks } from './api/apiBooks';
import { BookList } from './components/BookList/BookList';
import BookSearch from './components/BookSearch/BookSearch';
import { useState } from 'react';
import store from './Redux/Store/FavoritesStore';
import FavoriteCount from './components/FavoriteCount/FavoriteCount';
import { ThemeProvider, createTheme } from '@mui/material';
import AppBarHome from './shared/components/AppBar/AppBar';

const theme = createTheme({
  // seu tema personalizado aqui
});

export default function Home() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await getAllBooks(query);
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className='flex min-h-screen items-center justify-center p-5'>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <div className='flex flex-wrap w-max'>
            <AppBarHome>
              <BookSearch onSearch={handleSearch} />
            </AppBarHome>
            <BookList books={books} />
          </div>
        </Provider>
      </ThemeProvider>
    </main>
  );
}
