import React from 'react'
import {Box, Typography} from '@mui/material';

function Footer() {
  return (
    <Box pb={4}>
    <Typography variant='h6' align='center'>Developed by Jay &amp; Team</Typography>
    <Typography variant='h6' align='center'>
      <a href="https://github.com/jayadhav07/Movinest" target="_blank" rel="noreferrer">
        Github Source Code
      </a>
    </Typography>
  </Box>
  )
}

export default Footer