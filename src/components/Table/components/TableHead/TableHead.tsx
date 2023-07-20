import { TableHead as TableHeadMui, TableCell, TableRow } from '@mui/material';

export const TableHead: React.FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <TableHeadMui>
      <TableRow>
        {headers.map((header, i) => (
          <TableCell key={i}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
};
