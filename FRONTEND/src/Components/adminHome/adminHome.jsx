import React, { useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "../../axios/axios";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function AdminHome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/admin/userList')
      .then(response => {
        console.log(response.data.response); // Check the response structure
        setUsers(response.data.response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(users); // Print the users array in the console
 const deleteUser=(userId)=>{
   
  axios.delete('/api/v1/admin/deleteUser',{ data: { userId: userId } }).then((response)=>{
         
    console.log(response.data.response);
    setUsers(users.filter(user => user._id !== userId));

  })

 }
  return (
    <div>
      <TableContainer component={Paper} sx={{ width: 1200, marginTop: 6, marginLeft: 4 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>UserName</StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 8 }}>Email</StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 8 }}>Phone</StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 5 }}>Edit</StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 5 }}>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" size="small">
                    <FontAwesomeIcon icon={faPenToSquare} className="icon" style={{ marginRight: "10px" }} />
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" size="small" onClick={()=>deleteUser(user._id)}>
                    <FontAwesomeIcon icon={faTrash} className="icon" style={{ marginRight: "10px" }} />
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" disableElevation sx={{ marginLeft: 4, width: 1200, marginTop: 2, backgroundColor: "" }}>
        ADD USER
      </Button>
    </div>
  );
}

export default AdminHome;
