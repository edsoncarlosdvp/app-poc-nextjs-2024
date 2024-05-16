import { IBook } from '../util/interfaces/IBook';

interface IBookList {
  books: IBook[];
}

export const BookList = ({ books }: IBookList): JSX.Element => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto mt-16'>
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          <p>Autor(es): {book.volumeInfo.authors.join(', ')}</p>
          <p>Editora: {book.volumeInfo.publisher}</p>
          <p>Ano de Publicação: {book.volumeInfo.publishedDate}</p>
          <p>Descrição: {book.volumeInfo.description}</p>
        </li>
      ))}
    </ul>
  );
};
