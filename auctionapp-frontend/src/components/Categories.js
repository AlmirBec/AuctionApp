import { Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Categories = () => {
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
      };

      /*const token = localStorage.getItem('access_token');
      if(!token){
        window.location.href = "/login";
      }
      else{
        console.log(token);
      }*/

      const [categories, setCategories] = useState([]);

      useEffect(() => {
        axios.get("http://localhost:8080/items/categories")
        .then(response => {
            setCategories(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
  return (
    <List sx={style} component="nav" aria-label="mailbox folders" 
    subheader={<ListSubheader>Categories</ListSubheader>}>
        {categories.map((data) => (
        <div key={data.id}>
        <ListItem>
            <ListItemText primary={data.name} />
        </ListItem>
        <Divider/>
        </div>
  ))}
  <ListItem>
        <ListItemText primary="All categories"/>
    </ListItem>
</List>
  )
}

export default Categories