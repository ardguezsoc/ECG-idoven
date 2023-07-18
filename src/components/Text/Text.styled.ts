import { Typography, styled } from '@mui/material';

export const StyledText = styled(Typography)<StyledTextProps>(({ textColor, fontVariant }) => ({
  color: textColor || '#222',
  variant: fontVariant || 'h4',
}));

export interface StyledTextProps {
  textColor?: string;
  fontVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
