import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Grid } from '@mui/material'
import ItemList from '../components/ItemList'
import Categories from '../components/Categories'
import {decodeToken} from 'react-jwt';
import Wrapper from '../components/Wrapper'
export const Itempage = () => {
  const token = localStorage.getItem('token');
  const decodedToken = decodeToken(token);
  console.log(decodedToken);

  return (
    <>
    <Wrapper>
      <Grid container mt={5}
          direction="row"
          justifyContent="center"
          alignItems="flex-start">
        <Grid container item xs={12} sm={4} sx={{ paddingLeft: "16px" }}>
          <Categories/>
        </Grid>
        <Grid container item xs={12} sm={8} sx={{ paddingRight: "160px" }}>
          <ItemList/>
        </Grid>
      </Grid>
    </Wrapper>
    </>
  )
}
