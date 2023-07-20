import { useNavigate } from 'react-router-dom';
import { StyledNotFoundContainer } from './NoFound.styled';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFoundContainer>
      <Text fontVariant="h1">Oooooops!</Text>
      <Text fontVariant="h6">It looks like the page you are looking for does not exist</Text>
      <Text>Try going back to the previous page clicking this image</Text>
      <Image src="/images/404.webp" alt="404-image" $isClickable onClick={() => navigate('/')} width={'15rem'} />
    </StyledNotFoundContainer>
  );
};

export default NotFound;
