import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { styledTheme } from './themes';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { HistoryProvider } from './contexts/History/HistoryContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={styledTheme}>
      <HistoryProvider>
        <App />
      </HistoryProvider>
    </ThemeProvider>
  </BrowserRouter>
);
