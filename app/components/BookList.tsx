export const BookList = ({ books }: any): JSX.Element => {
  return (
    <div>
      <ul>
        {books.map((book: any, index: any) => (
          <li key={index}>
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
