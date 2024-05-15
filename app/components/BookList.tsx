import { IBook } from '../util/interfaces/IBook';

interface IBookList {
  books: IBook[];
}

export const BookList = ({ books }: IBookList): JSX.Element => {
  return (
    <div>
      <ul>
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
    </div>
  );
};
