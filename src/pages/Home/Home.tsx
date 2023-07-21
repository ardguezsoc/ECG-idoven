import { Text } from '../../components/Text';
import { FileHandle } from '../../components/FileHandle/FileHandle';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div>
      <Text>{t('home')}</Text>
      <h1 onClick={() => navigate('/history')}>Home</h1>
      <FileHandle />
    </div>
  );
};
