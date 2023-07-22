import { useNavigate } from 'react-router-dom';
import { StyledNotFoundContainer } from './NoFound.styled';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <StyledNotFoundContainer>
      <Text fontVariant="h1">{t('errors.notFoundPage.title')}</Text>
      <Text fontVariant="h6">{t('errors.notFoundPage.description')}</Text>
      <Text>{t('errors.notFoundPage.redirect')}</Text>
      <Image src="/images/404.webp" alt="404-image" $isClickable onClick={() => navigate('/')} width={'15rem'} />
    </StyledNotFoundContainer>
  );
};

export default NotFound;
