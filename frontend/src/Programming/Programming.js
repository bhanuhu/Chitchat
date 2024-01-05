import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import { useState } from 'react';
import ProgrammingMid from './ProgrammingMid';
import ProgrammingRight from './ProgrammingRight';

 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <ProgrammingMid/>
        <ProgrammingRight/>

      </Stack>
    </Box>
  )
}
export default Inside;