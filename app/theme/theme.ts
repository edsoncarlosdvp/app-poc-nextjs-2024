import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   // seu tema personalizado aqui
// });

// const themeVariables = {
//   '--mui-shape-borderRadius': `${theme.shape.borderRadius}px`,
//   '--mui-palette-common-white-rgb': theme.palette.common.white.replace('#', ''),
//   '--mui-spacing-2': `${theme.spacing(2)}px`,
//   '--mui-spacing-3': `${theme.spacing(3)}px`,
//   '--mui-breakpoints-sm': `${theme.breakpoints.values.sm}px`,
//   // Adicione outras variáveis conforme necessário
// };

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030',
    },
    text: {
      primary: '#ffffff',
    },
  },
});
