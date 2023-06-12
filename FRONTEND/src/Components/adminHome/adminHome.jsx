import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from '../../axios/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEditUser } from '../../redux-toolkit/adminEditUserReducer';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function AdminHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('/api/v1/admin/userList')
      .then(response => {
        console.log(response.data.response);
        setUsers(response.data.response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteUser = userId => {
    axios
      .delete('/api/v1/admin/deleteUser', { data: { userId: userId } })
      .then(response => {
        console.log(response.data.response);
        setUsers(users.filter(user => user._id !== userId));
      });
  };

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={search}
          onChange={handleSearch}
        />
      </Search>
      <TableContainer component={Paper} sx={{ width: 1200, marginTop: 6, marginLeft: 4 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>UserName</StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 8 }}>
                Email
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 8 }}>
                Phone
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 5 }}>
                Edit
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ paddingRight: 5 }}>
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.filter((value)=>{
              
            })}
            {users.map(user => (
              <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      dispatch(setEditUser(user));
                      console.log(user, 'user444$$');
                      navigate('/adminEditUser');
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="icon"
                      style={{ marginRight: '10px' }}
                    />
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => deleteUser(user._id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon"
                      style={{ marginRight: '10px' }}
                    />
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        disableElevation
        sx={{ marginLeft: 4, width: 1200, marginTop: 2, backgroundColor: '' }}
        onClick={() => navigate('/adminAddUser')}
      >
        ADD USER
      </Button>
    </div>
  );
}

export default AdminHome;
