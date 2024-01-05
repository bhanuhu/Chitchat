import { Box ,Stack} from "@mui/material";
import Navbar from "./Navbar";
import Leftcard from "./Leftcard";
import Rightcard from "./Rightcard";
import { useState } from 'react';
import Home from "./Home";
import Profile from "./Profile/Profile"
import Saved from './Saved/Saved';
import Following from './Following/Following';
import Communities from './Community/Communities';
import SportsMid from './Food/FoodRight';
import Middle from './Middle';
import Share from "./Share/ShareMid";
 
const Inside=()=>{
  const[home,sethome]=useState(null)
  

  return(
    <Box>
      <Navbar/>
      <Stack direction='row'>
        <Leftcard/>
       
        <Middle/>
        <Rightcard/>

      </Stack>
    </Box>
  )
}
export default Inside;