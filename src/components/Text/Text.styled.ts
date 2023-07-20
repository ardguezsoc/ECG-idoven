import { Typography, styled } from '@mui/material';

export const StyledText = styled(Typography)<StyledTextProps>(({ theme, color, fontVariant }) => ({
  color: color || theme.palette.primary.main,
  variant: fontVariant || 'h4',
}));

export interface StyledTextProps {
  color?: string;
  fontVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
