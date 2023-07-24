import { Box, styled } from '@mui/material';

export const StyledModalContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: '20px',
  textAlign: 'center',
  height: '100%',
  div: {
    textAlign: 'left',
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  button: {
    justifySelf: 'center',
    maxHeight: '2rem',
    alignSelf: 'flex-end',
  },
}));
