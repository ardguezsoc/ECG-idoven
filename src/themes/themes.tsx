import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    text: {
      notFound: string;
      shadow: string;
    };
  }
}

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
  text: {
    notFound: '#676767',
    shadow: '2px 2px 4px #00000033',
  },
};

export const styledTheme = createTheme(theme);
