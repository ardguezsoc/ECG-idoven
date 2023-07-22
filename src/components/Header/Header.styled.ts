import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const StyledHeader = styled(AppBar)`
  height: 4rem;
  padding: 1rem;
  position: absolute;
  background-color: transparent;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  #navLinksContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
      margin-right: 3rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
