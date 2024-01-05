import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import Rightcard from "../Rightcard";
import { useState } from 'react';
import ProfileMid from "./ProfileMid"
 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <ProfileMid/>
        <Rightcard/>

      </Stack>
    </Box>
  )
}
export default Inside;