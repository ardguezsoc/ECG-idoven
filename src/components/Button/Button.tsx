import { FC, ReactNode } from 'react';
import { StyledButton } from './Button.styled';
import { Spinner } from '../Spinner';

export interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
}
export const Button: FC<StyledButtonProps> = ({ children, isLoading, ...props }) => {
  return <StyledButton {...props}>{isLoading ? <Spinner /> : children}</StyledButton>;
};
