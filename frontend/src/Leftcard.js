import { Box,Button ,Divider,Stack, Typography} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { useNavigate } from 'react-router-dom';





const Leftcard=()=>{
    const navigate = useNavigate();

    const navtohome=(e)=>{
        
        navigate('/inside')
}
const navtoprofile=(e)=>{
    
    navigate('/profile')
} 
const navtosaved=(e)=>{
    
    navigate('/saved')
}
const navtofollowing=(e)=>{
    
    navigate('/following')
}
const navtocommunities=(e)=>{
    
    navigate('/communities')
}
const navtotravel=(e)=>{
    navigate('/travel')
}
const navtoprogramming=(e)=>{
    
    navigate('/programming')
}
const navtofood=(e)=>{
    
    navigate('/food')
}
const navtosports=(e)=>{
    
    navigate('/sports')
}
const navtoeducation=(e)=>{
    
    navigate('/education')
}





    return(<Box sx={{mr:15,color:'black',ml:10,boxShadow:4,mt:-5,pl:7,pr:7,pt:2 ,mb:5,position:'fixed',pb:2}}>
        <Stack sx={{color:'black'}}>
        <Button variant="text" sx={{color:'black'}} onClick={navtohome}><HomeOutlinedIcon/><Typography>Home</Typography></Button>
        <Button variant="text" sx={{color:'black'}} onClick={navtoprofile}><AccountCircleOutlinedIcon/>Profile</Button>
        <Button variant="text" sx={{color:'black'}} onClick={navtosaved}><LocalOfferOutlinedIcon/>Saved</Button>
        <Button variant="text" sx={{color:'black'}} onClick={navtofollowing}><AssignmentOutlinedIcon/>Following</Button>
        <Divider sx={{mt:2,mb:2}}></Divider>
        <Stack direction='row' sx={{}}><Groups2OutlinedIcon/><Typography sx={{ml:1}}>Communities </Typography><Button variant="text" sx={{mt:-.75,ml:2}} onClick={navtocommunities}>See all</Button></Stack>
        <Button variant="text" sx={{color:'black'}} onClick={navtotravel}>Travel</Button>
        <Button variant="text" sx={{color:'black'}} onClick={navtoprogramming}>Programming</Button>
        <Button variant="text" sx={{color:'black'}} onClick={navtofood}>Food and Cooking</Button>
        <Button variant="text" sx={{color:'black'}} onClick={navtosports}>Sports</Button>
        <Button variant="text" sx={{color:'black'}} onClick={navtoeducation}>Education</Button>


        </Stack>
        
        </Box>)
}
export default Leftcard;