import {styled ,Button,TextField,Stack,Box,Tab,Tabs,Typography} from "@mui/material";
import React from "react";
import { useState } from "react";

const Signup=()=>{
    let [values1,setvalues1]=useState({
        firstname:"",lastname:"",email:"",password:""
      })
    let[v1,setv1]=useState(false)
      const signup1=(e)=>{
        e.preventDefault();
        fetch('api/signup', {
            method: "POST",
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(values1)
            })
            .then((response) =>response.json())
            .then((result) => {
            if(result.Details==="Recieved"){
              setv1(true)
            }
            })
            .catch((error) => {
              console.error('Error during signup:', error);
          });
      
        setvalues1((values1) => ({  firstname:"",lastname:"",email:"",password:"" }));
      }
      
      const signup=(e)=>{
        
        
        setvalues1((values1) => ({ ...values1,[e.target.name]: e.target.value }));
        setv1(false)
        console.log(values1);
    
      }
      


    return(<Box>
        <Box sx={{mt:1,mb:2}}>
            <TextField id="firstname" name="firstname" type="text" value={values1.firstname}  onChange={signup} label="First Name" variant="outlined" />
          </Box>
          <Box sx={{mt:1,mb:2}}>
            <TextField id="lastname" name="lastname" type="text" value={values1.lastname}  onChange={signup} label="Last Name" variant="outlined" />
          </Box>
          <Box sx={{mt:2,mb:2}}>
            <TextField id="email" name="email" type="email" value={values1.email}onChange={signup} label="Email" variant="outlined" />
          </Box>
          <Box>
            <TextField id="password" name="password" label="Password" type="password" value={values1.password} onChange={signup}  variant="outlined" />
          </Box>
          <Box sx={{mt:3,mb:2}}>
            <Button variant="contained" onClick={signup1} type="submit"disableElevation>
              <Typography>Sign Up</Typography>
            </Button>
          </Box>
          <Box>
          <Stack sx={{mr:2,color:"red"}}>{v1? "Account created, Please Sign In" : "" }</Stack>
          </Box>
        </Box>)
}
export default Signup;