import { TableContainer, Paper } from '@mui/material';
import { TableHead } from './components/TableHead';
import { TableBody } from './components/TableBody';
import { StyledTable } from '.';

export const Table: React.FC<{ rows: any[]; headers: string[] }> = ({ rows, headers }) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <TableHead headers={headers} />
        <TableBody rows={rows} />
      </StyledTable>
    </TableContainer>
  );
};
