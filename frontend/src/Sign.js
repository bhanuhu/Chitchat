import {Button,TextField,Box, Typography} from "@mui/material";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Sign=()=>{
  const navigate = useNavigate();


    let [values,setvalues]=useState({
        email:'',
        password:''
      });

      const signin1=(e)=>{
        e.preventDefault();
        fetch('api/signin', {
        method: "POST",
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
        })
        .then((response) => response.json())
        .then((result) => {
        if(result==="signedin"){
          console.log("Signin ho gya");
          navigate('/inside')
        }
        
        })
        setvalues((values) => ({  email:'',password:''}));     
      }
      
      const handleChange2 = (e)=>{
        setvalues((values) => ({ ... values, [e.target.name]: e.target.value }));
       
        console.log(values);
      }


    return(
      <Box>
        <Box sx={{mt:1,mb:1}}>
          <TextField id="email" type="email" name="email" value={values.email}  onChange={handleChange2} label="Email" variant="outlined" />
        </Box>
        <Box sx={{mt:2,mb:2}}>
          <TextField id="password" type="password"  name="password" value={values.password} onChange={handleChange2} label="Password" variant="outlined" />
        </Box>
        <Box sx={{mt:3,mb:2}}>
          <Button variant="contained" type="submit" onClick={signin1} disableElevation>
            <Typography>Sign In</Typography>
          </Button>
        </Box>
        <Box>
          <GitHubIcon/>
        </Box>            
      </Box>
      )
}
export default Sign;