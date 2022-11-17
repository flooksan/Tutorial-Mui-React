import React from 'react'
import { Container, Box, Stack, 
  List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Switch } from '@mui/material/';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2}
      sx={{
        display: {
          // ถ้า breakpoint (a key is xs, extra-small: 0px) ให้ xs display none
          xs: "none",
          sm: "block"

        },
        // bgcolor:"#81C6E8"
        // "&:hover":{
        //         backgroundColor: "#FFD384"
        //     }

      }}

    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#dark">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch defaultChecked onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#page">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#friend">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friend" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href="#setting">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar