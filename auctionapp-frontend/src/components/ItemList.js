import { Box, Button, FormControl, Grid, ImageList, ImageListItem, ImageListItemBar, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

import { FaList, FaTh } from 'react-icons/fa';

 const ItemList = ({items}) => {
    
    const [visible, setVisible] = useState(9);
    
    

    const showMoreItems = () => {
        setVisible((previousValue) => previousValue + 9);
    }

  return (
    <Grid container >
        <Grid item container justifyContent={"space-between"}>
            <Grid item xs={6} md = {6}>
                <Box
                component="form"
                width={"33%"}
                pb={1}
                noValidate
                autoComplete="off">
            <TextField
            id="select-sort"
            select
            defaultValue="option1"
            >
                <MenuItem key= "option1" value="option1">Default sorting</MenuItem>
                <MenuItem key= "option2" value="option2">Sort by Name</MenuItem>
                <MenuItem key= "option3" value="option3">Sort by Newness</MenuItem>
                <MenuItem key= "option4" value="option4">Sort by Price</MenuItem>
                    
                </TextField>
                </Box>
            </Grid>
            <Grid item container xs={6} md={6} spacing={2} justifyContent={"flex-end"} alignItems={"center"}>
                <Grid item>                
                    <FaTh size={24}/> 
                </Grid>
                <Grid item>
                <Typography>
                        Grid
                    </Typography>
                </Grid>
                <Grid item>
                    <FaList size={24}/>
                </Grid>
                <Grid item>
                <Typography>
                        List
                </Typography>
                </Grid>
            </Grid> 
        </Grid>
    <Grid container item spacing={3} justifyContent="space-between">
        
  {items.slice(0, visible).map((item) => (
    <Grid item xs={12} md={4} key={item.id}>
      <ImageListItem sx={{ width: "100%"}}>
        <img
          src={`${item.photo.url}`}
          srcSet={`${item.photo.url}`}
          alt={item.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.name}
          subtitle={<span>Start from: ${item.price}.00</span>}
          position="below"
        />
      </ImageListItem>
    </Grid>
  ))}
  <Grid item xs ={12} textAlign={'center'} pb={3}>
    <Button
      variant="contained"
      sx={{backgroundColor: '#8367D8'}}
      type="submit"
      onClick={showMoreItems}
    >
      EXPLORE MORE
    </Button>
  </Grid>
</Grid>
</Grid>
  )
}

export default ItemList