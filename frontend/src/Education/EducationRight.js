import { Box,Button ,Divider,Stack, Typography} from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';
const EducationRight=()=>{
    return(<Box sx={{color:'black',boxShadow:4,p:2,mt:-5,ml:140,mr:12 ,position:'absolute',width:300}}>

    <Stack sx={{color:'black'}}>
    <Typography sx={{mt:1 ,fontWeight:'bold',fontSize:25 }}>Education</Typography>
    <Stack direction='row' sx={{mb:2,ml:6}}>
    <GroupsIcon sx={{ml:3}}> </GroupsIcon>
    <Typography sx={{ml:1}}>33 Members</Typography>
    </Stack>
    <Typography sx={{mr:0}}>A community for educators and students to share educational resources, tips, and advice. From K-12 to higher education, this community has all the knowledge you need to excel in your studies!</Typography>
    </Stack>
    <Typography sx={{mt:2,ml:-8 ,fontWeight:'bold',fontSize:15 }}>Community Guidelines:</Typography>
    <Stack direction='row'><SendIcon/><Typography>No hate speech or discrimination</Typography></Stack>
    <Stack direction='row'><SendIcon/><Typography> No sexually explicit content</Typography></Stack>
    <Stack direction='row'><SendIcon/><Typography>No posting personal information about others without their consent</Typography></Stack>
    <Stack direction='row'><SendIcon/><Typography>No spam or fraudulent content</Typography></Stack>
    <Stack direction='row'><SendIcon/><Typography>No threatening or harassing language</Typography></Stack>
    <Stack direction='row'><SendIcon/><Typography>No promotion of illegal activities</Typography></Stack>
    <Stack direction='row'><SendIcon/><Typography>No posting of copyrighted material without permission</Typography></Stack>
    <Stack direction='row'><SendIcon/><Typography>No graphic violence or gore</Typography></Stack>
    
    </Box>)
}
export default EducationRight;