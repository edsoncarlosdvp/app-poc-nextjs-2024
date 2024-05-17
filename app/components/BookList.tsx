import Image from 'next/image';
import { IBook } from '../util/interfaces/IBook';
import style from './style.module.scss';

interface IBookList {
  books: IBook[];
}

export const BookList = ({ books }: IBookList): JSX.Element => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto mt-16'>
      {books.map((book) => (
        <li
          key={book.id}
          className='h-auto text-left bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'
        >
          <h3>{book.volumeInfo.title}</h3>
            <Image
              className='mx-auto mt-4 mb-4'
              unoptimized
              src={book.volumeInfo.imageLinks.smallThumbnail && book.volumeInfo.imageLinks.smallThumbnail}
              width={100}
              height={150}
              alt={`Imagem do livro ${book.volumeInfo.title}`}
            />
          <p>Autor(es): {book.volumeInfo.authors.join(', ')}</p>
          <p>Editora: {book.volumeInfo.publisher}</p>
          <p>Ano de Publicação: {book.volumeInfo.publishedDate}</p>
          <p className={style.truncatewrap}>
            Descrição: {book.volumeInfo.description}
          </p>
        </li>)
      )}
    </ul>
  );
};
