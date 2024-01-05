import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import { useState } from 'react';
import SportsMid from './SportsMid';
import SportsRight from './SportsRight';

 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <SportsMid/>
        <SportsRight/>

      </Stack>
    </Box>
  )
}
export default Inside;