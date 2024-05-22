'use client';
import { getAllBooks } from './api/apiBooks';
import { BookList } from './components/BookList/BookList';
import BookSearch from './components/BookSearch/BookSearch';
import { useContext, useState } from 'react';
import AppBarHome from './shared/components/AppBar/AppBar';
import { ThemeContext } from './Context/ThemeProviderContext';

export default function Home() {
  const [books, setBooks] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearch = async (query: string) => {
    try {
      const data = await getAllBooks(query);
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main
      className={`flex justify-center h-screen ${
        theme === 'dark' ? 'dark-theme' : ''
      }`}
    >
      <div className='flex flex-wrap justify-center top-0'>
        <AppBarHome>
          <BookSearch onSearch={handleSearch} />
        </AppBarHome>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'light' : 'dark'}
        </button>
        <BookList books={books} />
      </div>
    </main>
  );
}
