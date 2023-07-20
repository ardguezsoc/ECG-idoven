import { Box, styled } from '@mui/material';

export const StyledNotFoundContainer = styled(Box)(({ theme }) => ({
  '& h1, h6, p': {
    color: theme.text.notFound,
    textShadow: theme.text.shadow,
  },
}));
