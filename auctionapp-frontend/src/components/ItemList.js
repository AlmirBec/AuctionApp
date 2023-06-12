import { Box, Button, Grid, ImageListItem, ImageListItemBar, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { FaList, FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchSortedItems } from '../service/itemsService/fetchItems';

 const ItemList = ({items, setItems, categoryId, setVisible}) => {

    const showMoreItems = () => {
        setVisible((previousValue) => previousValue + 9);
    }

    const handleMenuItemClick = (value) => {
        fetchSortedItems(categoryId, value, setItems);
    };

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
                <MenuItem key= "option1" value="option1" onClick={() => handleMenuItemClick('Id')}>
                    Default sorting
                </MenuItem>
                <MenuItem key= "option2" value="option2"onClick={() => handleMenuItemClick('Name')}>
                    Sort by Name
                </MenuItem>
                <MenuItem key= "option3" value="option3" onClick={() => handleMenuItemClick('StartDate')}>
                    Sort by Newness
                </MenuItem>
                <MenuItem key= "option4" value="option4" onClick={() => handleMenuItemClick('Price')}>
                    Sort by Price
                </MenuItem>
                    
                </TextField>
                </Box>
            </Grid>
            <Grid item container xs={6} md={6} spacing={2} justifyContent={"flex-end"} alignItems={"center"} paddingRight={"40px"}>
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
        
  {items && items.content && items.content.map(item => (
    <Grid item xs={12} md={4} key={item.id}>
        <Link to={`/item/${item.id}`} state={item} style={{ textDecoration: 'none' }}>
      <ImageListItem sx={{ width: "262px", height:"350px"}}>
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
          sx={{color:'#252525'}}
        />
      </ImageListItem>
      </Link>
    </Grid>
  ))}
  {items && !(items.content) && items.map(item => (
    <Grid item xs={12} md={4} key={item.id}>
        <Link to={`/item/${item.id}`} state={item} style={{ textDecoration: 'none' }}>
      <ImageListItem sx={{ width: "262px", height:"350px"}}>
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
          sx={{color:'#252525'}}
        />
      </ImageListItem>
      </Link>
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