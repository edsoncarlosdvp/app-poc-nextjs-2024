'use client';
import { Provider } from 'react-redux';
import { getAllBooks } from './api/apiBooks';
import { BookList } from './components/BookList/BookList';
import BookSearch from './components/BookSearch/BookSearch';
import { useState } from 'react';
import store from './Redux/Store/FavoritesStore';
import FavoriteCount from './components/FavoriteCount/FavoriteCount';

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
      <Provider store={store}>
        <div className='flex flex-wrap w-max'>
          <FavoriteCount />
          <BookSearch onSearch={handleSearch} />
          <BookList books={books} />
        </div>
      </Provider>
    </main>
  );
}
