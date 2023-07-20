import { TableBody as TableBodyMui, TableCell } from '@mui/material';
import { FileInfo } from '../../../../contexts/History/HistoryContext';
import { StyledRow } from '../..';

export const TableBody: React.FC<{ rows: FileInfo[] }> = ({ rows }) => {
  const rowHeaders = Object.keys(rows[0]);

  const rowsBuilders = (row: FileInfo) => {
    return (
      <StyledRow key={row.name}>
        {rowHeaders.map((header, i) => (
          <TableCell key={row.name + i.toString()}>{row[header]}</TableCell>
        ))}
      </StyledRow>
    );
  };

  return <TableBodyMui>{rows.map((row: FileInfo) => rowsBuilders(row))}</TableBodyMui>;
};
