import React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Layout from "./Layout";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const OrderNow = () => {
  const cartItems = useSelector((state) => state.details.cart);

  let Total = 0.0;

  const CalculateTotal = (item) => {
    console.log(parseFloat(item.Price.slice(1)));
    Total = Total + parseFloat(item.Price.slice(1));
    console.log(Total);
  };

  return (
    <Layout>
      <TableContainer style={{ padding: 20 }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(cartItems).map((item, index) => {
              CalculateTotal(item);
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.ProductName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.Description}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.Price}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        style={{
          padding: 20,
          marginTop: 20,
          marginLeft: 500,
          border: "1px solid blue",
          width: 200,
        }}
      >
        <div style={{ color: "blue" }}>Total:</div> <b>${Total}</b>
      </Grid>
    </Layout>
  );
};

export default OrderNow;
