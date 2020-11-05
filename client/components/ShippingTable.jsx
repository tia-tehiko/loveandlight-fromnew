import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  row: {
    fontFamily: 'Montserrat',
    fontWeight: 'bolder',
    backgroundColor: '#f4f4f4'
  },
  info: {
    fontFamily: 'Montserrat',
    fontWeight: 'bolder',
  }
});

function createData(location, cost) {
  return { location, cost };
}

const rows = [
  createData("Brisbane Metro Area", "$9.00 AUD"),
  createData("Australia Wide", "$14.00 AUD"),
  createData("Local Pick Up", "Free *")
];

export default function ShippingTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.row} align="center">LOCATION</TableCell>
            <TableCell className={classes.row} align="center">COST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.location}>
              <TableCell component="th" scope="row" align="center" className={classes.info}>
                {row.location}
              </TableCell>
              <TableCell align="center" className={classes.info}>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
