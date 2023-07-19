import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const StyledHeader = styled(AppBar)`
  height: 4rem;
  padding: 1rem;
  position: absolute;
  background-color: transparent;
  box-shadow: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
