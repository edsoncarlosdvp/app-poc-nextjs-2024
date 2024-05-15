'use client';
import { getAllBooks } from './api/apiBooks';
import { BookList } from './components/BookList';
import BookSearch from './components/BookSearch';
import { useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query: []) => {
    const foundBooks = await getAllBooks(query);
    setBooks(foundBooks);
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div>
          <BookSearch onSearch={handleSearch} />
          <BookList books={books} />
        </div>
      </div>
    </main>
  );
}
