import { Box, Button, Icon, Typography,Stack } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import{ Divider} from "@mui/material";


const Foling=()=>{
    return(<Box>
        <Stack direction='row' sx={{ml:5,mb:2}}>
        
        <AccountCircleIcon sx={{fontSize:55}}></AccountCircleIcon>
        <Typography sx={{fontSize:30,ml:2}}  >Name</Typography>
        <Button sx={{boxShadow:1 ,ml:35}}>Following</Button>
        <Divider sx={{mb:3}}></Divider>
        </Stack>
       
        
        
        
        
        </Box>)
}
export default Foling;