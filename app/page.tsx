'use client';
import { getAllBooks } from './api/apiBooks';
import { BookList } from './components/BookList/BookList';
import BookSearch from './components/BookSearch/BookSearch';
import { useContext, useState } from 'react';
import AppBarHome from './shared/components/AppBar/AppBar';
import { ThemeContext } from './theme/ThemeProviderContext';
import Button from '@mui/material/Button/Button';

export default function Home() {
  const [books, setBooks] = useState([]);
  const { toggleTheme } = useContext(ThemeContext);

  const handleSearch = async (query: string) => {
    try {
      const data = await getAllBooks(query);
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className='flex justify-center h-screen'>
      <div className='flex flex-wrap justify-center top-0'>
        <AppBarHome>
          <BookSearch onSearch={handleSearch} />
        </AppBarHome>
        <Button variant='contained' color='primary' onClick={toggleTheme}>
          Toggle Theme
        </Button>
        <BookList books={books} />
      </div>
    </main>
  );
}
