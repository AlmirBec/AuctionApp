import { Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Categories = ({onItemsChange}) => {
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
      };

      const [categories, setCategories] = useState([]);

      useEffect(() => {
        axios.get("http://localhost:8080/items/categories")
        .then(response => {
            setCategories(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleClick = (id) => {
        if(id === 0){
            axios.get("http://localhost:8080/items")
            .then(response => {
                onItemsChange(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
        else{
        axios.get(`http://localhost:8080/items/category/${id}`)
            .then(response => {
                onItemsChange(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
      };
  return (
    <List sx={style} component="nav" aria-label="mailbox folders" 
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