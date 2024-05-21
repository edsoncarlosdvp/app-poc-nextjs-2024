import { useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/Store/FavoritesStore';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderRounded';

interface IFavoriteCount {
  message?: string;
}

const FavoriteCount = ({ message }: IFavoriteCount) => {
  const favoriteCount = useSelector(
    (state: RootState) => state.favorites.books.length
  );
  return (
    <div>
      <IconButton
        size='large'
        aria-label=''
        color='inherit'
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: 0,
        }}
      >
        <Badge badgeContent={favoriteCount} color='error'>
          <FavoriteIcon />
        </Badge>
      </IconButton>
      <p>{message}</p>
    </div>
  );
};

export default FavoriteCount;
