import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Post = () => {
  return (
    <Card sx={{margin:5}} >
        <CardHeader
          avatar={

            <Avatar alt="Sooya" src="https://s.isanook.com/mv/0/rp/rc/w728h437/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL212LzAvdWQvMjIvMTEyOTA1L3VudGl0bGVkLTEuanBn.webp" />
            // <Avatar sx={{ bgcolor: "FFE9B1" }} aria-label="recipe">
            //   G
            // </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="100%"
          image="https://www.foxandbriar.com/wp-content/uploads/2016/04/Shrimp-and-Chorizo-Paella-6-of-10.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'#F96666'}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

        </CardActions>
      </Card>
  )
}

export default Post