import { Box,Button ,Divider,Stack, Typography} from "@mui/material";

const Rightcard=()=>{
    return(<Box sx={{color:'black',boxShadow:4,p:2,mt:-5,ml:150,pl:9,pr:9,mr:12 ,position:'fixed'}}>

    <Stack sx={{color:'black'}}>
    <Typography sx={{mt:2}}>Suggested Communities </Typography>
    <Typography variant="caption" >No communities to join. Check back later </Typography>
    <Divider sx={{mt:2,mb:2}}></Divider>



    </Stack>
    
    </Box>)
}
export default Rightcard;