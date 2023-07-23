import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  height: '4rem',
  padding: '1rem',
  position: 'absolute',
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',

  '#navLinksContainer': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    a: {
      marginRight: '3rem',
    },
    p: {
      fontSize: '0.7rem',
    },
  },
}));
