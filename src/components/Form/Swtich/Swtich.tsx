import { Switch as SwtichMui } from '@mui/material';
import { FC } from 'react';

export interface SwitchProps {
  onChange: (value: boolean) => void;
  value: boolean;
}

export const Switch: FC<SwitchProps> = ({ onChange, value }) => (
  <SwtichMui color="primary" checked={value} onChange={() => onChange(!value)} />
);
