import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box ,Button,Input,Stack ,TextField} from '@mui/material';
import Dialog from '@mui/material/Dialog';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
const Share=()=>{
    return(<Box>
        <Card sx={{Width:500,mb:3}}>
    
        <Box  sx={{justifyContent:'flex-start',ml:-20,mt:2,mb:2}}>
            <Typography sx={{fontWeight:"bold",fontSize:20}}>Share something with your community:</Typography>
        </Box>
        <TextField id="outlined-basic" label="Write here" variant="outlined" sx={{width:"90%",mb:1}}></TextField>
        <Button component="label" variant="contained" sx={{width:"90%",backgroundColor:"white",color:"black",mb:2,pt:1.5,pb:1.5}}>
     Photo / Video
      <VisuallyHiddenInput type="file" />
    </Button>
    <Button variant="contained" sx={{mr:55,mb:3}}>Post</Button>
    
        
        
        
        </Card>
        </Box>)
}
export default Share;