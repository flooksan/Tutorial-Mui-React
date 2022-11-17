// import Sidebar from './components/Sidebar'
// import Feed from './components/Feed'
// import Rightbar from './components/Rightbar'
import { Feed,Navbar,Rightbar,Sidebar, Add } from './components'
import {Container, Box, Stack, createTheme, ThemeProvider} from '@mui/material/';
import { useState } from 'react';


const App = () => {
    const [mode,setMode] = useState('dark')
    
    const darkTheme = createTheme ({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"} >
                <Navbar />
                <Stack direction='row' spacing={2} justifyContent="space-between" >
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add/>
            
            </Box>
        </ThemeProvider>
    )

}  

export default App;