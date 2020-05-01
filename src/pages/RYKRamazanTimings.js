import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Print from '@material-ui/icons/Print';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import { ryk_timing } from "../config/ryk_timing";
import AppBar from "../components/Appbar";
import Footer from "../components/Footer";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

const ref = React.createRef();

export default function KarachiRamazanTimings() {
  const classes = useStyles();

  return (
    <div>

      <AppBar Title="Rahim Yar Khan Ramzan Timings 2020"/>
      <center style={{ marginTop: 10, marginBottom: 10 }}>
        <div ref={ref}>
          <h1>Sehr & Iftar Timings Calender for Rahim Yar Khan 2020</h1>
          <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Ramadan</StyledTableCell>
                  <StyledTableCell align="center">SEHR</StyledTableCell>
                  <StyledTableCell align="center">IFTAR</StyledTableCell>
                  <StyledTableCell align="center">Date</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ryk_timing.map((row) => (
                  <StyledTableRow key={row.Ramadan}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.Ramadan}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.SEHR}</StyledTableCell>
                    <StyledTableCell align="center">{row.IFTAR}</StyledTableCell>
                    <StyledTableCell align="center">{row.Date}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </center>

      <center>
      <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowBack />}
          size="large"
          style={{ margin: 10 }}
          onClick={() => window.history.back()}
        >
          Go Back
      </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Print />}
          size="large"
          style={{ margin: 10 }}
          onClick={() => window.print()}
        >
          Print
      </Button>
        
      </center>

      <Footer />
    </div>
  );
}
