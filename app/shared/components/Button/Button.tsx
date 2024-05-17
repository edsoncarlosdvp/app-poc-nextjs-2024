import { useFormStatus } from 'react-dom';

interface IButton {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, className, children }: IButton) {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className={className}
      disabled={pending}
      onClick={onClick}
    >
      {pending ? 'Buscando...' : children}
      {/* <i className='fas fa-heart text-lg leading-none' aria-hidden='true'></i> */}
    </button>
  );
}
