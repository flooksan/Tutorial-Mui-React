import React from 'react'
import {Container, Box, Stack} from '@mui/material/';
import Post from './Post'





const Feed = () => {
  return (
    <Box bgcolor="#EFF5F5" color="white" flex={4} p={2} >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed