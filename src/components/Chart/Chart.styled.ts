import { styled, Box } from '@mui/material';

export const StyledChartContainer = styled(Box)(({ theme }) => ({
  height: '70vh',
  width: '70vw',
  backgroundColor: theme.palette.common.white,
  padding: '1rem',
  div: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    button: {
      margin: '0 0.5rem',
    },
  },
}));

export const StyledHighChartContainer = styled(Box)(() => ({
  height: '70vh',
  width: '70vw',
  padding: '1rem',
  '#buttonContainer': {
    marginTop: '2rem',
    button: {
      margin: '0 0.5rem',
    },
  },
}));
