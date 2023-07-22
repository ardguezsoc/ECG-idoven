import { Box, styled } from '@mui/material';

export const StyledFileHandleContainer = styled(Box)<StyledFileHandleContainerProps>(({ theme, $isDragActive }) => ({
  textAlign: 'center',
  position: 'relative',
  height: '20rem',
  width: '33rem',
  input: {
    display: 'none',
  },
  '#fileHandleDrag': {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderRadius: '1rem',
    borderStyle: 'dashed',
    borderColor: theme.palette.primary.main,
    backgroundColor: $isDragActive ? theme.common.lightGrey : theme.palette.common.white,
    boxShadow: theme.text.shadow,
  },
  '#fileHandleTextContainer': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-evenly',
  },
}));

interface StyledFileHandleContainerProps {
  $isDragActive?: boolean;
}
