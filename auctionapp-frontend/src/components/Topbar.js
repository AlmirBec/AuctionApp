import { Grid, Link, Typography } from '@mui/material';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { decodeToken } from 'react-jwt';

const Topbar = () => {

  const token = localStorage.getItem('token');
  const decodedToken = decodeToken(token);
  
  return (
    <Grid container justifyContent="space-between" alignItems="center" sx ={{backgroundColor: "#252525"}}>
    <Grid item xs={12} sm={6} md={4}>
      <Grid container sx={{paddingLeft:"60px" }} justifyContent="flex-start" alignItems="center" spacing={2}>
        <Grid item sx={{borderRadius: "50%" }}>
          <FaFacebook color='#9B9B9B' />
        </Grid>
        <Grid item sx={{ borderRadius: "50%" }}>
          <FaInstagram color='#9B9B9B'/>
        </Grid>
        <Grid item sx={{borderRadius: "50%" }}>
          <FaTwitter color='#9B9B9B'/>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Grid container justifyContent="flex-end" spacing={2} sx={{ paddingRight: '60px' }}>
        {token ? (
          <>
            <Grid item>
              <Typography variant="body1" style={{ fontFamily: 'Lato', color: '#FFFFFF' }}>
                Hi {decodedToken.firstname} {decodedToken.lastname}
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Link href="http://localhost:3000/login" underline="none">
                <Typography variant="body1" style={{ fontFamily: 'Lato', color: '#FFFFFF' }}>
                  Log in
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body1" style={{ fontFamily: 'Lato', color: '#FFFFFF' }}>
                or
              </Typography>
            </Grid>
            <Grid item>
              <Link href="http://localhost:3000/registration" underline="none">
                <Typography variant="body1" style={{ fontFamily: 'Lato', color: '#FFFFFF' }}>
                  Create an account
                </Typography>
              </Link>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Topbar