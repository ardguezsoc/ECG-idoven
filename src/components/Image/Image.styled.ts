import styled from 'styled-components';

export const StyledImage = styled.img<{ width?: string; $isClickable?: boolean }>`
  width: ${(props) => props.width || '100%'};
  cursor: ${(props) => (props.$isClickable ? 'pointer' : 'default')};
`;
