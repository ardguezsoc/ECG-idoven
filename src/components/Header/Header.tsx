import { StyledHeader } from './Header.styled';
import { Image } from '../Image';
import { Text } from '../Text';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <Image src="/images/idoven-logo.svg" alt="idoven-logo" width={'90px'} />
      <Box id="navLinksContainer">
        <NavLink to="/history">History</NavLink>
        <Text>{t('idovenCodeChallenge')}</Text>
      </Box>
    </StyledHeader>
  );
};
