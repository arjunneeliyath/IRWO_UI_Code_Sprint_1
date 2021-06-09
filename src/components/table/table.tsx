import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '../../assets/icons/First.svg';
import KeyboardArrowLeft from '../../assets/icons/Previous.svg';
import KeyboardArrowRight from '../../assets/icons/Next.svg';
import LastPageIcon from '../../assets/icons/Last.svg';
import RefreshIcon from '../../assets/icons/refresh.svg';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import { TableCell } from '@material-ui/core';

interface ITablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
}

interface ITableProps {
    searchForm: React.ReactChild;
    rows: Array<React.ReactNodeArray>;
    titles: Array<React.ReactNode>;
    page: number;
    count: number;
    handleChangePage: (page: number, rowsPerPage: number) => void;
    refreshTable: (page: number, rowsPerPage: number) => void;
}

export default function TableComponent({
    rows,
    searchForm,
    titles,
    page,
    count,
    handleChangePage,
    refreshTable,
}: ITableProps) {
    const [numberOfRecordsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useStyles();
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        handleChangePage(page, numberOfRecordsPerPage);
    };

    const TablePaginationActions = (props: ITablePaginationActionsProps) => {
        const theme = useTheme();
        const { page, count, rowsPerPage } = props;
        return (
            <div className={classes.paginationContainer}>
                <IconButton
                    onClick={() => handleChangePage(0, rowsPerPage)}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    {theme.direction === 'rtl' ? <img src={LastPageIcon} /> : <img src={FirstPageIcon} />}
                </IconButton>
                <IconButton
                    onClick={() => handleChangePage(page - 1, rowsPerPage)}
                    disabled={page === 0}
                    aria-label="previous page"
                >
                    {theme.direction === 'rtl' ? <img src={KeyboardArrowRight} /> : <img src={KeyboardArrowLeft} />}
                </IconButton>
                <label className={classes.input}>{page + 1}</label>
                <IconButton
                    onClick={() => handleChangePage(page + 1, rowsPerPage)}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {theme.direction === 'rtl' ? <img src={KeyboardArrowLeft} /> : <img src={KeyboardArrowRight} />}
                </IconButton>
                <IconButton
                    onClick={() => handleChangePage(Math.ceil(count / rowsPerPage) - 1, rowsPerPage)}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {theme.direction === 'rtl' ? <img src={FirstPageIcon} /> : <img src={LastPageIcon} />}
                </IconButton>
            </div>
        );
    };

    return (
        <Grid container>
            {searchForm}
            <Grid item xs={12}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table" className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    {titles.map((title, i) => (
                                        <TableCell key={i} className={classes.titleContainer}>
                                            {title}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows?.map((row, i) => (
                                    <TableRow key={i}>
                                        {row.map((record, j) => (
                                            <TableCell key={j} className={classes.tableCell}>
                                                {record}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
            {rows && (
                <Grid container direction="row-reverse">
                    <Grid item className={classes.pagination}>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            colSpan={3}
                            count={count}
                            rowsPerPage={numberOfRecordsPerPage}
                            page={page}
                            labelRowsPerPage="Items per page"
                            labelDisplayedRows={({ from, to, count }) => {
                                return `Displaying ${from} to ${to} of ${count} Items`;
                            }}
                            onChangePage={() => handleChangePage(page, numberOfRecordsPerPage)}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                        <IconButton aria-label="Refresh Table">
                            <img
                                src={RefreshIcon}
                                className={classes.refreshIcon}
                                onClick={() => refreshTable(page, numberOfRecordsPerPage)}
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}
