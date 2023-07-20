import { useHistory } from '../../hooks';

export const History = () => {
  const { history, setHistoryOfFiles } = useHistory();
  return (
    <div>
      <h1>History</h1>
      <h2>{history}</h2>
      <button onClick={() => setHistoryOfFiles('test')}>Click Me</button>
    </div>
  );
};
