import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import ItemList from '../components/ItemList'
import Categories from '../components/Categories'
import Wrapper from '../components/Wrapper'
import axios from 'axios';

export const Itempage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/items")
    .then(response => {
        setItems(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}, []);

const handleItemsChange = (newItems) => {
  setItems(newItems);
};
  return (
    <>
    <Wrapper>
      <Grid container mt={5}
          direction="row"
          justifyContent="center"
          alignItems="flex-start">
        <Grid container item xs={3} sm={3} sx={{ paddingLeft: "16px" }}>
          <Categories onItemsChange = {handleItemsChange}/>
        </Grid>
        <Grid container item xs={9} sm={9} pr={7}>
          <ItemList items={items} setItems={setItems}/>
        </Grid>
      </Grid>
    </Wrapper>
    </>
  )
}
