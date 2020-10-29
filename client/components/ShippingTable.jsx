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
    minWidth: 400
  }
});

function createData(location, cost) {
  return { location, cost };
}

const rows = [
  createData("Brisbane Metro Area", "$9.00"),
  createData("Australia Wide", "$14.00"),
  createData("Local Pick Up", "Free")
];

export default function ShippingTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">LOCATION</TableCell>
            <TableCell align="center">COST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.location}>
              <TableCell component="th" scope="row" align="center">
                {row.location}
              </TableCell>
              <TableCell align="center">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
