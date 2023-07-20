import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { styledTheme } from './themes';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={styledTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
