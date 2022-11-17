import React,{ useState } from 'react'
import { Tooltip, IconButton, 
  Fab, Modal, Box, 
  Typography, styled, Stack, 
  Avatar, TextField, ButtonGroup,
  Button
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import TagIcon from '@mui/icons-material/Tag';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import './add.css'
// import { Add as AddIcon } from '@mui/icons-material/';

const StyledModal = styled(Modal)({
  display:"flex",
  justifyContent: 'center',
  alignItems: 'center',
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
})

const Add = () => {
  // set state open of Modal
  const [open,setOpen] = useState(false)
  return (
    // Tool Tip delete
    <>
      <Tooltip title="Add" sx={{
        position: 'fiexd', bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 },

      }}
        onClick={e => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign='center'>
            Creat post
          </Typography>

          <UserBox>
            <Avatar
              src="https://static.zerochan.net/Kamen.Rider.Kabuto.%28Character%29.full.3788640.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500} >
              Kloof2
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-static"
            multiline
            rows={3}
            defaultValue="Write your post!"
            variant="filled"
            color='gray'
          />
          <Stack direction="row" gap={1} m={2} >
            <EmojiEmotionsIcon color="primary" />
            <AddAPhotoIcon color="secondary" />
            <PersonAddAltIcon color="error" />
            <VideoCallIcon color="success" />
            <TagIcon />
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group"
            fullWidth
            >
            <Button>POST</Button>
            <Button style={{ backgroundColor: "red" }} id="test" >Cancle</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add

// เอาไว้ทำ login
// Token base authorization
// Jsonwebtoken