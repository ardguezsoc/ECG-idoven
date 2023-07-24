import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const StyledFabButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  backgroundColor: theme.palette.common.white,
  width: '2rem',
  height: '4rem',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: theme.shadow.fabShadow,
}));
