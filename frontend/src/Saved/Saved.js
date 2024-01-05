import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import Rightcard from "../Rightcard";
import { useState } from 'react';
import SavedMid from './SavedMid';
 
const Inside=()=>{

   return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <SavedMid/>
        <Rightcard/>

      </Stack>
    </Box>
  )
}
export default Inside;