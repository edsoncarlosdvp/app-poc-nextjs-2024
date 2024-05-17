import { useState } from 'react';
import { Button } from '../../shared/components/Button/Button';
import Input from '../../shared/components/Input/Input';

interface IBookSearch {
  onSearch: (query: string) => void;
}

export default function BookSearch({ onSearch }: IBookSearch) {
  const [query, setQuery] = useState('Cangaço');

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
        <Input
          className='w-96 border-none bg-slate-50 px-2 py-2 text-gray-700 outline-none focus:outline-none'
          type='search'
          label='Qual o livro que deseja buscar?'
          value={query}
          onChange={handleChange}
        />
        <Button
          className='ml-2 rounded bg-blue-600 px-4 py-2 text-white'
          onClick={() => onSearch(query)}
        >
          Buscar
        </Button>
      </form>{' '}
    </div>
  );
}
