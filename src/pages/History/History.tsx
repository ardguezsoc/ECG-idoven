import { useHistory } from '../../hooks';
import { Table } from '../../components/Table';
import { Text } from '../../components/Text';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { BackArrow } from '../../components/BackArrow';
import { Box } from '@mui/material';
import { Image } from '../../components/Image';
import { StyledMainContainer } from '../Home/Home.styled';
import { StyledNoFilesContainer } from './History.styled';

export const History = () => {
  const { history } = useHistory();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const headers = [
    t('table.headers.name'),
    t('table.headers.size'),
    t('table.headers.date'),
    t('table.headers.type'),
    t('table.headers.extension'),
  ];

  return (
    <StyledMainContainer>
      <BackArrow goBack={() => navigate('/')} />
      {history.length ? (
        <Table rows={history} headers={headers} />
      ) : (
        <StyledNoFilesContainer>
          <Text variant="h4">{t('errors.noFilesAdded.title')}</Text>
          <Text variant="h5">{t('errors.noFilesAdded.description')}</Text>
          <Image src="/images/noFiles.webp" alt="no-files-icon" width={'8rem'} />
        </StyledNoFilesContainer>
      )}
    </StyledMainContainer>
  );
};
