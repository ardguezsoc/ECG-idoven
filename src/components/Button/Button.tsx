import { FC, ReactNode } from 'react';
import { StyledButton, StyledFabButton } from './Button.styled';
import { Spinner } from '../Spinner';

export interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
}
export const Button: FC<StyledButtonProps> = ({ children, isLoading, ...props }) => {
  return <StyledButton {...props}>{isLoading ? <Spinner /> : children}</StyledButton>;
};
export const FabButton: FC<{ icon: string }> = ({ icon }) => {
  return (
    <StyledFabButton>
      <img src={`/icons/${icon}.webp`} alt={icon} />
    </StyledFabButton>
  );
};
