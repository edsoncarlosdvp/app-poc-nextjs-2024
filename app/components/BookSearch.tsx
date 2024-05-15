import { FormEvent, useState } from 'react';

export default function BookSearch({ onSearch }: any) {
  const [query, setQuery] = useState('');

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    await onSearch(query);
  };

  return (
    <div>
      <input
        className='w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none'
        type='search'
        name='search'
        placeholder='Busca'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type='submit'
        className='m-2 rounded bg-blue-600 px-4 py-2 text-white'
        onClick={handleSearch}
      >
        <i className='fas fa-heart text-lg leading-none' aria-hidden='true'></i>
      </button>
    </div>
  );
}
