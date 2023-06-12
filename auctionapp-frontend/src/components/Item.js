import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Wrapper from './Wrapper'
import { useLocation } from 'react-router-dom';

const Item = () => {
    const {state} = useLocation();
  return (
    <Wrapper>
    <Grid container p={3} justifyContent={'space-between'} sx={{paddingLeft:"60px"}}>
        <Grid item container direction={"column"} xs={12} sm={6} md={5}>
            <Grid item xs={12} sm={6} md={6}>
                <img
                    src={`${state.photo.url}`}
                    srcSet={`${state.photo.url}`}
                    alt={"Item"}
                    style={{ height: "330px", width: "300px" }}
                    loading="lazy"
                />
            </Grid>
            <Grid item container width={"300px"}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Grid item xs={2.4}>
                    <img key={index} 
                    src={`${state.photo.url}`} 
                    srcSet={`${state.photo.url}`}
                    alt="Item" 
                    style={{ height: "97px" , width:'58px' }}
                    loading="lazy"/>
                </Grid>
            ))}
                
            </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} md={7} direction={"column"}>
            <Grid item>
                <h1>{state.name}</h1>
            </Grid>
            <Grid item>
                <p>Starts from: ${state.price}</p>
            </Grid>
            <Grid item>
                <Box sx={{ p: 2, border: '1px solid grey', width:"200px", textAlign:"center" }}>
                    <p>Highest bid: $55</p>
                    <p>Number of bids: 1</p>
                    <p>Time left: 10 weeks 6 days</p>
                </Box>
            </Grid>
            <Grid item paddingTop={3}>
                <Box sx={{display:'flex'}}>
                   <TextField placeholder='Enter 56 or higher' sx={{width:"250px", mr:5}}></TextField> 
                   <Button>PLACE BID</Button>
                </Box>   
            </Grid>
            <Grid item>
                <Box sx={{display: 'flex', justifyContent:"space-between"}}>
                    <Button>Details</Button>
                    <Button>Seller information</Button>
                    <Button>Customer reviews</Button>
                </Box>
                <Divider sx={{backgroundColor: 'black'}}/>
                <Typography>
                {state.description}
                </Typography>
            </Grid>
        </Grid>
  </Grid>
  </Wrapper>
  )
}

export default Item
