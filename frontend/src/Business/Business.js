import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import { useState } from 'react';
import BusinessMid from './BusinessMid';
import BusinessRight from './BusinessRight';

 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <BusinessMid/>
        <BusinessRight/>

      </Stack>
    </Box>
  )
}
export default Inside;