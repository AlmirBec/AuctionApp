import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import ItemList from '../components/ItemList'
import Categories from '../components/Categories'
import Wrapper from '../components/Wrapper';
import { fetchItems } from '../service/itemsService/fetchItems';

const ItemPage = () => {

  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [visible, setVisible] = useState(9);
  
  useEffect(() => {
    fetchItems(setItems, visible);
  }, [visible]);

  const handleItemsChange = (newItems) => {
    setItems(newItems);
  };

  const handleCategoryIdChange = (id) => {
    setCategoryId(id);
  }

  return (
    <Wrapper>
      <Grid container mt={5}
          direction="row"
          justifyContent="center"
          alignItems="flex-start">
        <Grid container item xs={3} sm={3} sx={{ paddingLeft: "16px" }}>
          <Categories onItemsChange = {handleItemsChange} onCategoryIdChange = {handleCategoryIdChange} visible={visible}/>
        </Grid>
        <Grid container item xs={9} sm={9} pr={7}>
          <ItemList items={items} setItems={setItems} categoryId = {categoryId} setVisible = {setVisible}/>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default ItemPage