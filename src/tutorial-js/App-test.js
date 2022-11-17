
import {Button, styled} from '@mui/material/';
// import {Button} from '@mui/material/Button'; เขียนได้ สองแบบ
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography'; // or import { Typography } from '@mui/material';





const App = () => {
    // Custon component in create
        // Create button component to pump button โดยไม่ต้อง copy paste ตัว button
        
        const OrangeButton = styled (Button) ({
            // Style set of button
            backgroundColor: "#FF884B",
            color: "#FFF",
            margin: 5,
            "&:hover":{
                backgroundColor: "#FFD384"
            },
            "&:disabled":{
                backgroundColor: "gray",
                color: 'salmon'
            },

        }) 

        // Pass custom Theme component
        const CustomThemeButton = styled (Button) (({theme}) => ({
            // Style set of button
            backgroundColor: theme.palette.otherColor.main,
            color: "#FFF",
            margin: 5,
            "&:hover":{
                backgroundColor: "#FFD384"
            },
            "&:disabled":{
                backgroundColor: "gray",
                color: 'salmon'
            },

        }))
        

    return (
        <div>
        {/* Buttuon */}
            <Button variant="text">Text</Button>
            
            <Button 
                startIcon={<SettingsIcon />} 
                variant="contained" 
                color='secondary' 
                size='small'
            >
            Settings
            </Button>
            <Button 
                startIcon={<AddBoxIcon />} 
                variant="contained" 
                color='success' 
                size='small'
            >
            Add new post
            </Button>
            
            <Button variant="outlined" disabled>Outlined</Button>
        {/* Typography */}
            <Typography variant="h1" component="p">
                It uses h1 style but it's a p tag
            </Typography>
        
        {/* Custom style by sx={{}} */}
            <Button 
                variant='contained'
                sx={{
                    backgroundColor: "skyblue",
                    color: "#888",
                    margin: 5,
                    "&:hover":{
                        backgroundColor: "lightyellow"
                    },
                    "&:disabled":{
                        backgroundColor: "gray",
                        color: 'salmon'
                    },
                }}
            >
            My custom style Button
            </Button>
        {/* Cuttom MUI Component in use */}
            <OrangeButton>Cuttom MUI Component 1</OrangeButton>
            <CustomThemeButton>Cuttom MUI Component 2</CustomThemeButton>
        
        </div>
        
    )
}

export default App;