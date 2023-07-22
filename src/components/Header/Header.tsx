import { StyledHeader } from './Header.styled';
import { Image } from '../Image';
import { Text } from '../Text';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <Image src="/images/idoven-logo.svg" alt="idoven-logo" width={'90px'} />
      <Text>{t('idovenCodeChallenge')}</Text>
    </StyledHeader>
  );
};
