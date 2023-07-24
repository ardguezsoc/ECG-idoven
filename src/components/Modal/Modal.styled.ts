import { Box, styled } from '@mui/material';

export const StyledContentModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25rem',
  backgroundColor: theme.palette.common.white,
  boxShadow: '24',
  minHeight: '20rem',
  padding: '2rem',
  borderRadius: '0.5rem',
}));
