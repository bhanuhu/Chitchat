import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import Foling from '../Foling';
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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{width:'40%',mb:2,mt:-5,ml:60    }}>
    <Card sx={{Width:500}}>
      <CardHeader
        
        title="People you're following"
        subheader=""
      />
      <Divider sx={{mb:3}}></Divider>
      

      <Foling/>
      
    </Card>
    </Box>
  );
}
