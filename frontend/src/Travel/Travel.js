import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import { useState } from 'react';
import TravelMid from './TravelMid';
import TravelRight from './TravelRight';

 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <TravelMid/>
        <TravelRight/>

      </Stack>
    </Box>
  )
}
export default Inside;