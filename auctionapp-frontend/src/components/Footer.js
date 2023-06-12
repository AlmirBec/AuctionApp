import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid container className='topbar'>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={1} direction="column" marginLeft={10} p={2.5}>
          <Grid item>
            <Typography variant="h6" className='footerText'>AUCTION</Typography>
          </Grid>
          <Grid item>
          <Link href="#" underline="none">
            <Typography variant="body1" className='footerText'>
              About us
            </Typography>
          </Link>
          </Grid>
          <Grid item>
          <Link href="#" underline="none">
            <Typography variant="body1" className='footerText'>
              Terms and conditions
            </Typography>
          </Link>
          </Grid>
          <Grid item>
          <Link href="#" underline="none">
            <Typography variant="body1" className='footerText'>
              Privacy and Policy
            </Typography>
          </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}  sx={{paddingLeft:"200px"}}>
        <Grid container spacing={1} direction="column" p={2.5}>
          <Grid item>
            <Typography variant="h6" sx={{color: "#FFFFFF", fontFamily: 'Lato', fontSize:"16px"}}>GET IN TOUCH</Typography>
          </Grid>
          <Grid item>
            <Typography className='footerText'>Call us at: +123 797-567-2535</Typography>
          </Grid>
          <Grid item>
            <Typography className='footerText'>support@auction.com</Typography>
          </Grid>
          <Grid item>
            <Grid container  spacing={2}>
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
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer