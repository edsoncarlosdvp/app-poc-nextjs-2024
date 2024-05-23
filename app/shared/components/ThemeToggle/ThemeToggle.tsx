import { ThemeContext } from '@/app/theme/ThemeProviderContext';
import Button from '@mui/material/Button';
import { useContext } from 'react';

interface IThemeToggle {
  showThemeName?: boolean;
  children?: React.ReactNode | string;
}

export const ThemeToggle = ({
  showThemeName = false,
  children,
}: IThemeToggle) => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <Button variant='contained' color='primary' onClick={toggleTheme}>
      {children}
      {showThemeName && `Tema atual: ${themeName}`}
    </Button>
  );
};
