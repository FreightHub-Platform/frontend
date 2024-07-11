'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

type PurchaseOrder = {
  po: string;
  drop_location: string;
  drop_date: Date;
  load_share: boolean;
};

function createData(
  order: string,
  location: string,
  place_date: Date,
  pick_date: Date,
  status: string,
  action: string,
  purchaseOrders: PurchaseOrder[]
) {
  return {
    order,
    location,
    place_date,
    pick_date,
    status,
    action,
    purchaseOrders,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.order}
        </TableCell>
        <TableCell align="right">{row.location}</TableCell>
        <TableCell align="right">{row.place_date.toLocaleDateString()}</TableCell>
        <TableCell align="right">{row.pick_date.toLocaleDateString()}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.action}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Purchase Orders
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Po No:</TableCell>
                    <TableCell align="right">Drop-Off Location</TableCell>
                    <TableCell align="right">Drop-Off Date</TableCell>
                    <TableCell align="right">Load Sharing</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.purchaseOrders.map((purchaseOrderRow) => (
                    <TableRow key={purchaseOrderRow.po}>
                      <TableCell align="left">{purchaseOrderRow.po}</TableCell>
                      <TableCell align="right">{purchaseOrderRow.drop_location}</TableCell>
                      <TableCell align="right">{purchaseOrderRow.drop_date.toLocaleDateString()}</TableCell>
                      <TableCell align="right">{purchaseOrderRow.load_share ? 'Yes' : 'No'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Order1', 'Location1', new Date('2022-01-01'), new Date('2022-01-05'), 'Delivered', 'View', [
    { po: 'PO1', drop_location: 'LocationA', drop_date: new Date('2022-01-02'), load_share: true },
    { po: 'PO2', drop_location: 'LocationB', drop_date: new Date('2022-01-03'), load_share: false },
  ]),
  createData('Order2', 'Location2', new Date('2022-01-02'), new Date('2022-01-06'), 'Pending', 'View', [
    { po: 'PO3', drop_location: 'LocationC', drop_date: new Date('2022-01-04'), load_share: true },
  ]),
  createData('Order3', 'Location3', new Date('2022-02-01'), new Date('2022-02-05'), 'Shipped', 'View', [
    { po: 'PO4', drop_location: 'LocationD', drop_date: new Date('2022-02-02'), load_share: true },
    { po: 'PO5', drop_location: 'LocationE', drop_date: new Date('2022-02-03'), load_share: false },
  ]),
  createData('Order4', 'Location1', new Date('2022-01-01'), new Date('2022-01-05'), 'Delivered', 'View', [
    { po: 'PO1', drop_location: 'LocationA', drop_date: new Date('2022-01-02'), load_share: true },
    { po: 'PO2', drop_location: 'LocationB', drop_date: new Date('2022-01-03'), load_share: false },
  ]),
  createData('Order5', 'Location2', new Date('2022-01-02'), new Date('2022-01-06'), 'Pending', 'View', [
    { po: 'PO3', drop_location: 'LocationC', drop_date: new Date('2022-01-04'), load_share: true },
  ]),
  createData('Order6', 'Location3', new Date('2022-02-01'), new Date('2022-02-05'), 'Shipped', 'View', [
    { po: 'PO4', drop_location: 'LocationD', drop_date: new Date('2022-02-02'), load_share: true },
    { po: 'PO5', drop_location: 'LocationE', drop_date: new Date('2022-02-03'), load_share: false },
  ]),
  createData('Order7', 'Location1', new Date('2022-01-01'), new Date('2022-01-05'), 'Delivered', 'View', [
    { po: 'PO1', drop_location: 'LocationA', drop_date: new Date('2022-01-02'), load_share: true },
    { po: 'PO2', drop_location: 'LocationB', drop_date: new Date('2022-01-03'), load_share: false },
  ]),
  createData('Order8', 'Location2', new Date('2022-01-02'), new Date('2022-01-06'), 'Pending', 'View', [
    { po: 'PO3', drop_location: 'LocationC', drop_date: new Date('2022-01-04'), load_share: true },
  ]),
  createData('Order9', 'Location3', new Date('2022-02-01'), new Date('2022-02-05'), 'Shipped', 'View', [
    { po: 'PO4', drop_location: 'LocationD', drop_date: new Date('2022-02-02'), load_share: true },
    { po: 'PO5', drop_location: 'LocationE', drop_date: new Date('2022-02-03'), load_share: false },
  ])
  // Add more rows as needed
];

const OrdersTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>PO</TableCell>
            <TableCell>Order No:</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Placement Date</TableCell>
            <TableCell align="right">Pickup Date</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row) => (
            <Row key={row.order} row={row} />
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={(subProps) => (
                <TablePaginationActions
                  {...subProps}
                  count={rows.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onPageChange={handleChangePage}
                />
              )}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default OrdersTable;
