import { FC } from 'react';
import { StyledBackArrowContainer } from './BackArrow.styled';

interface BackArrowProps {
  goBack: () => void;
}

export const BackArrow: FC<BackArrowProps> = ({ goBack }) => (
  <StyledBackArrowContainer>
    <img className="arrow" src="/icons/leftArrow.svg" alt="back-arrow" onClick={() => goBack()} />
  </StyledBackArrowContainer>
);
