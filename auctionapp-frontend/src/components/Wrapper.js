import React from 'react';
import Grid from '@mui/material/Grid';
import Topbar from './Topbar';
import Footer from './Footer';
import Header from './Header';

const Wrapper = ({ children }) => {
  return (
    <Grid container direction="column" minHeight={"100vh"}>
      <Grid item>
        <Topbar />
      </Grid>
      <Grid item>
        <Header/>
      </Grid>
      
      <Grid item flexGrow={1}>
        {children}
      </Grid>
      
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Wrapper;