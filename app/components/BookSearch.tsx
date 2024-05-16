import { FormEvent, useState } from 'react';
import { getAllBooks } from '../api/apiBooks';
import styles from './style.module.scss';

interface IBookSearch {
  onSearch: (query: string) => void;
}

export default function BookSearch({ onSearch }: IBookSearch) {
  const [query, setQuery] = useState('cangaço');

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className='flex flex-nowrap justify-center w-full h-auto mx-auto'>
      <form onSubmit={handleSubmit}>
        <input
          className='w-96 border-none bg-slate-50 px-2 py-2 text-gray-700 outline-none focus:outline-none'
          type='search'
          name='search'
          placeholder='Busca'
          value={query}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='ml-2 rounded bg-blue-600 px-4 py-2 text-white'
        >
          Buscar
        </button>
      </form>{' '}
    </div>
  );
}
