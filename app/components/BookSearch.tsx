import { FormEvent, useState } from 'react';
import { getAllBooks } from '../api/apiBooks';
import styles from './style.module.scss';

interface IBookSearch {
  onSearch: (query: string) => void;
}

export default function BookSearch({ onSearch }: IBookSearch) {
  const [query, setQuery] = useState('');

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none'
        type='search'
        name='search'
        placeholder='Busca'
        value={query}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='m-2 rounded bg-blue-600 px-4 py-2 text-white'
      >
        <i className='fas fa-heart text-lg leading-none' aria-hidden='true'></i>
      </button>
    </form>
  );
}
