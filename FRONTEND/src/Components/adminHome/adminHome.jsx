import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("rashid", 356, 16.0, 49, 3.9),
];

function AdminHome() {
  return (
    <div>

      <TableContainer
        component={Paper}
        sx={{ width: 1200, marginTop: 6, marginLeft: 4 }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>userName</StyledTableCell>
              <StyledTableCell align="right" sx={{paddingRight:8}} >email</StyledTableCell>
              <StyledTableCell align="right" sx={{paddingRight:5}} >edit</StyledTableCell>
              <StyledTableCell align="right" sx={{paddingRight:5}} >
                delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">muhammed59@gmail.com</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    size="small"
                
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPenToSquare} className="icon" style={{ marginRight: "10px" }} />
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" size="small"  >
                    {"   "}
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon"
                      style={{ marginRight: "10px" }}
                    />
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
   
      </TableContainer>
           <Button variant="contained" disableElevation sx={{marginLeft:4,width:1200,marginTop:2, backgroundColor:""}} >
      ADD USER
    </Button>
    </div>
  );
}

export default AdminHome;
