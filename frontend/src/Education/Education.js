import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import { useState } from 'react';
import EducationMid from './EducationMid';
import EducationRight from './EducationRight';

 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <EducationMid/>
        <EducationRight/>

      </Stack>
    </Box>
  )
}
export default Inside;