import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import { useState } from 'react';
import HealthMid from './HealthMid';
import HealthRight from './HealthRight';

 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <HealthMid/>
        <HealthRight/>

      </Stack>
    </Box>
  )
}
export default Inside;