import { StyledHeader } from './Header.styled';
import { Image } from '../Image';
import { Text } from '../Text';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Image src="/images/idoven-logo.svg" alt="idoven-logo" width={'90px'} />
      <Text>Idoven.ai Coding Challenge</Text>
    </StyledHeader>
  );
};
