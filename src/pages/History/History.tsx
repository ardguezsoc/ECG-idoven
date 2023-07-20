import { useHistory } from '../../hooks';
import { Table } from '../../components/Table';
import { Text } from '../../components/Text';

export const History = () => {
  const { history } = useHistory();
  const headers = ['Name', 'Size (gb)', 'Date', 'Type', 'Extension'];

  return history.length ? <Table rows={history} headers={headers} /> : <Text>No files added yet</Text>;
};
