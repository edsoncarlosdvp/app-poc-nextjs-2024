import Image from 'next/image';
import { IBook } from '../../util/interfaces/IBook';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/Store/FavoritesStore';
import { addFavorite, removeFavorite } from '@/app/Redux/Slice/FavoritesSlice';

interface IBookList {
  books: IBook[];
}

export const BookList = ({ books }: IBookList): JSX.Element => {
  const dispatch = useDispatch();
  const favoriteBook = useSelector((state: RootState) => state.favorites.books);

  const isFavorite = (bookId: string) =>
    favoriteBook.some((book) => book.id === bookId);

  const handleFavorite = (book: IBook) => {
    if (isFavorite(book.id)) {
      dispatch(removeFavorite(book.id));
    } else {
      dispatch(addFavorite(book));
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 text-center mx-auto mt-12'>
      {books.map((book) => (
        <div
          key={book.id}
          className='h-auto text-left bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border'
        >
          <div
            className='flex justify-between'
            onClick={() => handleFavorite(book)}
          >
            <h3>{book.volumeInfo.title}</h3>
            {isFavorite(book.id) ? (
              <Favorite style={{ cursor: 'pointer', color: 'red' }} />
            ) : (
              <FavoriteBorder />
            )}
          </div>
          <Image
            className='mx-auto mt-4 mb-4'
            unoptimized
            src={
              !book.volumeInfo.imageLinks?.smallThumbnail
                ? 'unavailable.png'
                : book.volumeInfo.imageLinks?.smallThumbnail
            }
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
        </div>
      ))}
    </div>
  );
};
