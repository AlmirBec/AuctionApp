import { Divider, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../service/fetchCategories';
import { fetchItems, fetchItemsByCategory } from '../service/fetchItems';

const Categories = ({onItemsChange, onCategoryIdChange}) => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories(setCategories);
    }, []);

    const handleClick = (id) => {
        onCategoryIdChange(id);
        if (id === 0) {
            fetchItems(onItemsChange);
        } else {
            fetchItemsByCategory(onItemsChange, id);
          }
    };

  return (
    <List className='categoryList' component="nav" aria-label="mailbox folders" 
    subheader={<ListSubheader>Categories</ListSubheader>}>
        {categories.map((data) => (
        <div key={data.id}>
        <ListItemButton onClick={() => handleClick(data.id)}>
            <ListItemText primary={data.name} />
        </ListItemButton>
        <Divider/>
        </div>
  ))}
  <div key={0}>
    <ListItemButton onClick={() => handleClick(0)}>
            <ListItemText primary="All categories"/>
        </ListItemButton>
    </div>
</List>
  )
}

export default Categories