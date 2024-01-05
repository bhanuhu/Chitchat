import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box ,Button,Input,Stack} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';

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


  
  return (
    <Box sx={{width:'40%',mb:2,mt:-5,ml:60    }}>
    <Card sx={{Width:500}}>
    <Box >
        <Box justify="flex-end"sx={{ml:65,mt:4}}>
            <Button onClick={handleClickOpen}><EditIcon  ></EditIcon></Button>
       </Box>
        < AccountCircleIcon sx={{fontSize:125,mt:1}}> </AccountCircleIcon>
    </Box>
    <Box>
        <Typography sx={{fontWeight:"bold",fontSize:30}}>Name</Typography>
    </Box>
    <Box sx={{mt:2}}>
    <Typography> I am .........</Typography>
    </Box>
    <Stack direction="row" sx={{mt:4,mb:5}}>
        <Stack>  <Typography sx={{ml:15}}>Posts</Typography><Typography sx={{ml:15}}>5</Typography></Stack>
        <Stack><Typography sx={{ml:15}}>Following</Typography><Typography sx={{ml:15}}>10</Typography></Stack>
        <Stack><Typography sx={{ml:15}}>Followers</Typography><Typography sx={{ml:15}}>5  </Typography></Stack>
    </Stack>
    
    
    </Card>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Update Profile
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{m:2}}>
          <Typography gutterBottom >
            Name
          </Typography>
          <Input dividers sx={{mb:2}}></Input>
          <Typography gutterBottom>
            Bio
          </Typography>
          <Input sx={{mb:2}}></Input>
          <Typography gutterBottom>
           Age
          </Typography>
          <Input sx={{mb:2}}></Input>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
    
  );
}
