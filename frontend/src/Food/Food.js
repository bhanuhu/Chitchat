import { Box ,Stack} from "@mui/material";
import Navbar from "../Navbar";
import Leftcard from "../Leftcard";
import { useState } from 'react';
import FoodMid from './FoodMid';
import FoodRight from './FoodRight';

 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
        <FoodMid/>
        <FoodRight/>

      </Stack>
    </Box>
  )
}
export default Inside;