import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { History } from './pages/History';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
