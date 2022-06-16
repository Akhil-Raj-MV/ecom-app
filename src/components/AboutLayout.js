import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'


const AbouLayout = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <div style={{display:"flex", justifyContent:"center"}}>
          <Typography mt={5} variant='h6'>About us</Typography>
        </div>
        
          <div style={{display:"flex", justifyContent:"center"}}>
              <Box sx={{width: 500, height: 300}}>
              <Typography mt={2} variant='h4' padding={0} align="center"> 
                We are on a mission to make 
                Quality products more accessible
              </Typography>
              </Box>
          </div>
      </Container> 
    </>
  )
}

export default AbouLayout