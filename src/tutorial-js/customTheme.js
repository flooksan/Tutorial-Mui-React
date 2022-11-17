import { createTheme } from "@mui/material/"

// Create custom team
export const customTheme = createTheme({
    palette: {
        primary: {
          main: '#1760a5',
          light: 'skyblue',
        },
        secondary: {
            // main: '#15c630'
            // orange 
            main: '#FF884B',
        },
        otherColor: {
            main:'#967E76'
            // Gray
        }

      },
})

// export default customTheme;

/*
เวลาใช้ก็ใช้คำสั่ง
import {theme} from './path'

<ThemeProvider theme={customTheme}> <App /> </ThemeProvider>

ใน Appมี CustomThemeButton เป็นchild component ถ้าจะเรียกใช้ทำโดย customTheme ใน CustomThemeButton
        ทำได้โดยเรียก object destructur { theme } ตอนนี้เราสามารถใช้ทุกสิ่งใน theme ที่เป็น object ได้แล้ว
        const CustomThemeButton = styled (Button) (({theme}) => ({
            // Style set of button
            backgroundColor: theme.palette.otherColor.main, 
            // เรียกสีจากใน theme > object key: palette > object key: otherColor > object key: main ที่มี value ='#967E76'
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

 */