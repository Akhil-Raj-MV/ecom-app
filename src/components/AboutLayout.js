import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Ecom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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
              <Typography mt={2} variant='h4' padding={0} align="center" > 
                We are on a mission to make 
                Quality products more accessible
              </Typography>
              </Box>
          </div>
      </Container>       
        <Copyright sx={{ mt: 5 }} />

    </>
  )
}

export default AbouLayout