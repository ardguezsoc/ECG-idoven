import { styled, Box } from '@mui/material';

export const StyledSpinner = styled(Box)`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border-left-color: ${(props) => props.theme.palette.common.white};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
