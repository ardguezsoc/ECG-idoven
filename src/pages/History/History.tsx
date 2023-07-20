import { useHistory } from '../../hooks';
import { Table } from '../../components/Table';
import { Text } from '../../components/Text';
import { useTranslation } from 'react-i18next';

export const History = () => {
  const { history } = useHistory();
  const { t } = useTranslation();
  const headers = [
    t('table.headers.name'),
    t('table.headers.size'),
    t('table.headers.date'),
    t('table.headers.type'),
    t('table.headers.extension'),
  ];

  return history.length ? <Table rows={history} headers={headers} /> : <Text>{t('errors.noFilesAdded')}</Text>;
};
