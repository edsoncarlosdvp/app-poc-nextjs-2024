'use client';
import { getAllBooks } from './api/apiBooks';
import { BookList } from './components/BookList';
import BookSearch from './components/BookSearch';
import { useState } from 'react';

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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div>
          <BookSearch onSearch={handleSearch} />
        </div>
        <BookList books={books} />
      </div>
    </main>
  );
}
