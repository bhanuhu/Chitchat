import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box ,Button,Input,Stack} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();
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
const navtohealth=(e)=>{
    
    navigate('/health')
}
const navtoeducation=(e)=>{
    
    navigate('/education')
}
const navtobusiness=(e)=>{
    
    navigate('/business')
}
  
  return (
    <Box sx={{width:'40%',mb:2,mt:-5,ml:60    }}>
    <Button sx={{width:"100%" ,mb:3}} onClick={navtosports}>
    <Card  sx={{width:"100%"}}>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Sports</Typography>
    </Box>
    <Box sx={{mt:2}}>
        <Typography> 33 Members</Typography>
    </Box>
    </Card></Button>
    <Button sx={{width:"100%" ,mb:3}} onClick={navtoeducation}>
    <Card sx={{width:"100%"}}>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Education</Typography>
    </Box>
    <Box sx={{mt:2}}>
        <Typography> 33 Members</Typography>
    </Box>
    </Card> </Button>
    <Button sx={{width:"100%" ,mb:3}} onClick={navtohealth}>
    <Card sx={{width:"100%"}}>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Health & Fitness</Typography>
    </Box>
    <Box sx={{mt:2}}>
        <Typography> 33 Members</Typography>
    </Box>
    </Card> </Button>
    <Button sx={{width:"100%" ,mb:3}} onClick={navtotravel}>
    <Card sx={{width:"100%"}}>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Travel</Typography>
    </Box>
    <Box sx={{mt:2}}>
        <Typography> 33 Members</Typography>
    </Box>
    </Card> </Button>
    <Button sx={{width:"100%" ,mb:3}} onClick={navtoprogramming}>
    <Card sx={{width:"100%"}}>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Programming</Typography>
    </Box>
    <Box sx={{mt:2}}>
        <Typography> 33 Members</Typography>
    </Box>
    </Card> </Button>
    <Button sx={{width:"100%" ,mb:3}} onClick={navtofood}>
    <Card sx={{width:"100%"}}>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Food and Cooking</Typography>
    </Box>
    <Box sx={{mt:2}}>
        <Typography> 33 Members</Typography>
    </Box>
    </Card> </Button>
    <Button sx={{width:"100%" ,mb:3}} onClick={navtobusiness}>
    <Card sx={{width:"100%"}}>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Business & Enterpreneurship</Typography>
    </Box>
    <Box sx={{mt:2}}>
        <Typography> 33 Members</Typography>
    </Box>
    </Card> </Button>

    
    </Box>
    
  );
}
