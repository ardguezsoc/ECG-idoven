import { InputHTMLAttributes, FC } from 'react';
import { StyledInput } from './Input.styled';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => <StyledInput {...props} />;
