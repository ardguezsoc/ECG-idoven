import React, { ReactNode } from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { StyledText, StyledTextProps } from './Text.styled';

interface TextProps extends TypographyProps, Pick<StyledTextProps, 'fontVariant'> {
  children: ReactNode;
  color?: string;
  margin?: string;
}

export const Text: React.FC<TextProps> = ({ children, fontVariant, ...props }) => {
  return (
    <StyledText variant={fontVariant} {...props}>
      {children}
    </StyledText>
  );
};
