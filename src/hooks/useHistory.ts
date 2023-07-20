import { useContext } from 'react';
import { HistoryContext } from '../contexts/History';

export const useHistory = () => {
  const { history, setHistoryOfFiles } = useContext(HistoryContext);

  return { history, setHistoryOfFiles };
};
