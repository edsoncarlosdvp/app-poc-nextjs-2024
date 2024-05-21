import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // seu tema personalizado aqui
});

const themeVariables = {
  '--mui-shape-borderRadius': `${theme.shape.borderRadius}px`,
  '--mui-palette-common-white-rgb': theme.palette.common.white.replace('#', ''),
  '--mui-spacing-2': `${theme.spacing(2)}px`,
  '--mui-spacing-3': `${theme.spacing(3)}px`,
  '--mui-breakpoints-sm': `${theme.breakpoints.values.sm}px`,
  // Adicione outras variáveis conforme necessário
};

const cssVariables = Object.entries(themeVariables)
  .map(([key, value]) => `${key}: ${value};`)
  .join('\n');

console.log(cssVariables);

// Opcionalmente, você pode escrever estas variáveis em um arquivo .css ou .scss
// Por exemplo, você pode usar fs (filesystem) do Node.js para escrever um arquivo
// fs.writeFileSync('src/themeVariables.css', `:root {\n${cssVariables}\n}`);

export default theme;
