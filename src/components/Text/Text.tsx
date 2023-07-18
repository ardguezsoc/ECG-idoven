import React, { ReactNode } from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { StyledText, StyledTextProps } from './Text.styled';

interface TextProps extends TypographyProps, StyledTextProps {
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({ children, textColor, fontVariant }) => {
  return (
    <StyledText textColor={textColor} fontVariant={fontVariant}>
      {children}
    </StyledText>
  );
};
