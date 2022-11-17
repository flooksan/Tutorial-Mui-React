import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import MailIcon  from '@mui/icons-material/Mail'
import Notifications  from '@mui/icons-material/Notifications'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';


const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between"
});

// SearchBar
const Search = styled("div") (({ theme }) => ({
  backgroundColor: 'white',
  padding : '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

// Icon container
const Icons = styled(Box) (({ theme }) => ({
  // backgroundColor: 'white',
  
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  // ด้านล้างหมายความว่าถ้า display ขนาด > 600px จะ display: 'flex'
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

// UserBox
const UserBox = styled(Box) (({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  // ด้านล้างหมายความว่าถ้า display ขนาด > 600px จะ display: 'none' แต่ถ้าขนาดน้อยกว่านั้นจะแสดงรูป กับชื่อ Kloof2
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  // useState 
    // open/close menu
    const [open, setOpen] = useState(false)
  
  
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6"
          sx={
            {
            display: {xs:'none', sm:'block'}
            }
          }
        >Sound taste</Typography>
        <GraphicEqIcon 
        sx={
            {
            display: {xs:'block', sm:'none'}
            }
          }
        />

        <Search><InputBase placeholder="search.." /></Search>
        {/* InputBase มีสไตล์น้อยที่สุด  
        มีจุดมุ่งหมายเพื่อเป็นองค์ประกอบพื้นฐานในการสร้างข้อมูลเข้า  
        มันมีโหลดของการรีเซ็ตสไตล์และตรรกะสถานะบางอย่าง */}
        <Icons >
          {/* แจ้งเตือน */}
          <Badge badgeContent={9} color="error" 
          sx ={{cursor:'pointer'}} 
          >
            <Notifications />
          </Badge>
          {/* เมลล์ */}
          <Badge badgeContent={1} color="error" 
          sx ={{cursor:'pointer'}}
          >
            <MailIcon />
          </Badge>
          {/* รูป */}
          <Avatar alt='Kloof.dev' 
          sx={
            {
              width:'30px', height: '30px',
              cursor: 'pointer',
            }
            }
          src='https://static.zerochan.net/Kamen.Rider.Kabuto.%28Character%29.full.3788640.jpg' 
          onClick={e=>setOpen(true)}

          />
        </Icons>
        <UserBox >  
        {/* <UserBox onClick={e=>setOpen(true)} > ในคลิปให้ทำแบบนี้คลิกที่ชื่อจะออก */}
          
          <Typography variant='span' >Kloof2</Typography>
          <Avatar alt='Kloof.dev'
            sx={
              {
                width: '30px', height: '30px',
                cursor: 'pointer',
              }
            }
            src='https://static.zerochan.net/Kamen.Rider.Kabuto.%28Character%29.full.3788640.jpg'
            onClick={e=>setOpen(true)}

          />
          
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>

      </Menu>
      

    </AppBar>
  )
}

export default Navbar