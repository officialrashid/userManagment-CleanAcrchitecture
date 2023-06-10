import React,{useState,useEffect}from 'react'
import { Box, Stack, Typography, Button,List } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Avatar from '@mui/material/Avatar';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

function profile() {
  const body = useSelector((state)=>state.register)
  const [user,setUsers] = useState([])
  useEffect(()=>{
    console.log(body,";;;;;;;;;;;;;999");
    setUsers(body)
   
  },[])
  const navigate = useNavigate()
  return (
    <Box marginLeft={1} sx={{ width: 300, height: 500, borderRadius: 2,marginTop:5 }}>
    <Box  sx={{borderRadius:2,boxShadow:6,width:300,height:'auto',zIndex:1,}}>
      <Stack >
        <Avatar
          alt=""
          src=""
          sx={{ width: 80, height: 80,marginTop:-3,mx:'auto'}}
        />
        <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={500}>
          {body.name} 
        </Typography>
        <Typography textAlign={'center'} marginTop={1} fontSize={16} fontWeight={300}>
        {body.email}
        </Typography>
        <Button variant="contained" sx={{ width: 200, borderRadius: 2, alignContent: 'center', marginLeft: 6, marginTop: 3, backgroundColor: "#3C6FF5" }} onClick={()=>
          navigate('/addProfile')
        } >Complete profile</Button>
        <Button variant="contained" sx={{ width: 200, borderRadius: 2, alignContent: 'center', marginLeft: 6, marginTop: 3, backgroundColor: "#3C6FF5" }}   >Signup</Button>
       
       <List />
       <List />
       <List />
       <List />
       <List />
        

      </Stack>

    </Box>


  </Box>
  )
}

export default profile
