import { MouseEventHandler } from 'react';
import { useFormStatus } from 'react-dom';

interface IButtonSubmit {
  handleSearch: () => void;
}

export function ButtonSubmit({ handleSearch }: IButtonSubmit) {
  const { pending } = useFormStatus();

  <button
    type='submit'
    className='m-2 rounded bg-blue-600 px-4 py-2 text-white'
    disabled={pending}
    onClick={handleSearch}
  >
    {pending ? 'Buscando...' : 'Buscar'}
    {/* <i className='fas fa-heart text-lg leading-none' aria-hidden='true'></i> */}
  </button>;
}
