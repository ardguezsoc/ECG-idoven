import { FC, ReactNode } from 'react';
import { StyledButton } from './Button.styled';

export interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
export const Button: FC<StyledButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
