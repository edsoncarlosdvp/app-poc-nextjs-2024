import { RootState } from '@/app/Redux/Store/FavoritesStore';
import Image from 'next/image';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@/app/Redux/Slice/FavoritesSlice';
import style from './style.module.scss';
import { IBook } from '@/app/util/interfaces/IBook';
import Typography from '@mui/material/Typography/Typography';

export const FavoriteList = () => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(
    (state: RootState) => state.favorites.books
  );

  const isFavorite = (bookId: string) =>
    favoriteBooks.some((book) => book.id === bookId);

  const handleFavorite = (book: IBook) => {
    if (isFavorite(book.id)) {
      dispatch(removeFavorite(book.id));
    } else {
      dispatch(addFavorite(book));
    }
  };

  return (
    <div>
      {favoriteBooks.length === 0 ? (
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}
        >
          Não há livro favoritados!
        </Typography>
      ) : (
        favoriteBooks.map((book) => (
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
        ))
      )}
    </div>
  );
};
