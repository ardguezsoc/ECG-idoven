import React, { ReactNode } from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { StyledText, StyledTextProps } from './Text.styled';

interface TextProps extends TypographyProps, Pick<StyledTextProps, 'fontVariant'> {
  children: ReactNode;
  color?: string;
}

export const Text: React.FC<TextProps> = ({ children, color, fontVariant }) => {
  return (
    <StyledText color={color} variant={fontVariant}>
      {children}
    </StyledText>
  );
};
