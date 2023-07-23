import styled from 'styled-components';

export const StyledBackArrowContainer = styled.div<{ width?: string; $isClickable?: boolean }>`
  padding: 15px;
  position: absolute;
  left: 30px;
  top: 84px;
  img {
    cursor: pointer;
  }

  :hover {
    animation: swingArrow 1s ease-in-out infinite alternate;
  }

  @keyframes swingArrow {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-10px);
    }
  }
`;
