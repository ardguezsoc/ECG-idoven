import { styled } from '@mui/material/styles';
import { TableRow, Table } from '@mui/material';

export const StyledRow = styled(TableRow)`
  &:last-child td,
  &:last-child th {
    border: 0;
  }
`;

export const StyledTable = styled(Table)`
  min-width: 650px;
`;
