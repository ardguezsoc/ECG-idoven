import { createTheme } from '@mui/material/styles';

export const theme = {
  palette: {
    primary: {
      main: '#002735',
    },
    secondary: {
      main: '#39c4d8',
    },
    background: {
      default: '#f2f2f2',
    },
    common: {
      white: '#fff',
    },
  },
};

export const styledTheme = createTheme(theme);
