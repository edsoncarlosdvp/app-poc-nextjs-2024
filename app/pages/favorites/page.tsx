'use client';
import { FavoriteList } from '@/app/components/FavoriteList/FavoriteList';
import AppBarHome from '@/app/shared/components/AppBar/AppBar';
import Typography from '@mui/material/Typography/Typography';

const FavoritePage = () => {
  return (
    <>
      <AppBarHome>
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            width: '100%',
          }}
        >
          Página dos seus favoritos
        </Typography>
      </AppBarHome>
      <FavoriteList />
    </>
  );
};

export default FavoritePage;
