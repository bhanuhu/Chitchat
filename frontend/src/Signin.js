import {Stack,Box,Tab,Tabs,Typography} from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";
import Sign from "./Sign";
import Signup from "./Signup";
import { useEffect,useState } from 'react';


const Signin=()=>{
  
  function CustomTabPanel(props) {
     const { children, value, index, ...other } = props;
  
  
      
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
        <Box sx={{ p: 3 }}>
           <Typography>{children}</Typography>
        </Box>
        )}
      </Box>);}
      
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

 

  const [val, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  
  

  return(<Box  className="ok">
    <Stack spacing={2}>
      <Box><Typography variant="h2" sx={{mt:8,fontWeight:"bold"}}>ChitChat</Typography></Box>
      <Box>
        <Box sx={{ borderBottom: 0, borderColor: 'Boxider' }}>
          <Tabs value={val} onChange={handleChange} centered>
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
          </Tabs>
        </Box>
        <CustomTabPanel value={val} index={0}>
          <Sign/>
        </CustomTabPanel>


        <CustomTabPanel value={val} index={1}>
          <Signup/>
        </CustomTabPanel>

        
      </Box>
        
    </Stack>
        
  </Box>
    )
    
    
}
export default Signin; 