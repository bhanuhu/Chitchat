import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import Rightcard from "../Rightcard";
import { useState } from 'react';
import CommunityMid from './CommunityMid';
 
const Inside=()=>{
  
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <CommunityMid/>
        <Rightcard/>

      </Stack>
    </Box>
  )
}
export default Inside;