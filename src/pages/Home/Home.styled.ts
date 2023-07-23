import { Box, styled } from '@mui/material';

export const StyledMainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  #tableContainer {
    width: 80%;
    min-width: 40rem;
  }
`;

export const StyledMainContainerECG = styled(StyledMainContainer)`
  background-color: black;
  background-size: contain;
  background-position: auto center;
  background-image: url('/images/ECG.gif');
`;
