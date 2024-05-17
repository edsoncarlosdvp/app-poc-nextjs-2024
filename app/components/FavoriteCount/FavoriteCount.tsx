import { useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/Store/FavoritesStore';

const FavoriteCount = () => {
  const favoriteCount = useSelector(
    (state: RootState) => state.favorites.books.length
  );
  return (
    <div style={{ marginLeft: 27, marginBottom: 20 }}>
      Total de favoritos: {favoriteCount}
    </div>
  );
};

export default FavoriteCount;
