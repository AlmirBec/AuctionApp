import { Button, Grid, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

 const ItemList = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(9);
    
    useEffect(() => {
        axios.get("http://localhost:8080/items")
        .then(response => {
            setItems(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const showMoreItems = () => {
        setVisible((previousValue) => previousValue + 9);
    }

  return (
    <Grid container spacing={3} justifyContent="space-between">
  {items.slice(0, visible).map((item) => (
    <Grid item xs={4} key={item.id}>
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
  <Grid item xs ={12} textAlign={'center'} >
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
  )
}

export default ItemList