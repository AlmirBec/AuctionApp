import { Box, Button, Grid, ImageList, ImageListItem, ImageListItemBar, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaList, FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';

 const ItemList = ({items, setItems, searchValue}) => {
    console.log(searchValue);
    const [visible, setVisible] = useState(9);
    const showMoreItems = () => {
        setVisible((previousValue) => previousValue + 9);
    }
    let isSameValue = false;
    if(items.length !== 0){
        const firstItemValue = items[0].category.id;
        isSameValue = items.every((item) => {
            return item.category.id === firstItemValue;
        })
    }
    const handleMenuItemClick = (value) => {
        if(isSameValue){
            if(value === 'option1'){
                axios.get(`http://localhost:8080/items/category/${items[0].category.id}`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }
            else if(value === 'option2'){
                axios.get(`http://localhost:8080/items/sortInCategoryByName/${items[0].category.id}`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }
            else if(value === 'option3'){
                axios.get(`http://localhost:8080/items/sortInCategoryByNewness/${items[0].category.id}`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }
            else if(value === 'option4'){
                axios.get(`http://localhost:8080/items/sortInCategoryByPrice/${items[0].category.id}`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }
        }
        else{
            if(value === 'option1'){
                axios.get(`http://localhost:8080/items`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }
            else if(value === 'option2'){
                axios.get(`http://localhost:8080/items/sortByName`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }
            else if(value === 'option3'){
                axios.get(`http://localhost:8080/items/sortByNewness`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }
            else if(value === 'option4'){
                axios.get(`http://localhost:8080/items/sortByPrice`)
                .then(response => {
                setItems(response.data);
            })
                .catch(error => {
                    console.log(error);
                });  
            }  
        }
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
                <MenuItem key= "option1" value="option1" onClick={() => handleMenuItemClick('option1')}>
                    Default sorting
                </MenuItem>
                <MenuItem key= "option2" value="option2"onClick={() => handleMenuItemClick('option2')}>
                    Sort by Name
                </MenuItem>
                <MenuItem key= "option3" value="option3" onClick={() => handleMenuItemClick('option3')}>
                    Sort by Newness
                </MenuItem>
                <MenuItem key= "option4" value="option4" onClick={() => handleMenuItemClick('option4')}>
                    Sort by Price
                </MenuItem>
                    
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
        <Link to={`/item/${item.id}`} state={item} >
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