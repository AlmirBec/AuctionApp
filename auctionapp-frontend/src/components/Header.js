import { Button, Grid, TextField , InputAdornment, Link} from '@mui/material';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) =>{
    setSearchValue(event.target.value);
    console.log(event.target.value);
  }
  return (
    <Grid container alignItems="center" justifyContent="center" mt={-5}>
      {location.pathname !== "/login" && location.pathname !== "/registration" ? (
        <>
          <Grid item xs={12} md={3} pl={2}>
            <img src="https://jectossi.sirv.com/auction-app-logo%201.png" alt="Item Photo" />
          </Grid>

          <Grid item xs={12} md={5}>
            <TextField placeholder="Search" fullWidth 
            value={searchValue}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                    <FaSearch />
                </InputAdornment>
              ),
            }}/>
          </Grid>

          <Grid item xs={12}  md={4} container justifyContent="flex-start" spacing={1} pl={8}>
            <Grid item>
              <Link  href="/items">
              <Button sx={{fontFamily:"Lato", fontSize:"14px", color:"#252525"}}>Home</Button>
              </Link>
            </Grid>
            <Grid item>
              <Button sx={{fontFamily:"Lato", fontSize:"14px", color:"#252525"}}>About</Button>
            </Grid>
            <Grid item>
              <Button sx={{fontFamily:"Lato", fontSize:"14px", color:"#252525"}}>My Account</Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid item>
          <img src="https://jectossi.sirv.com/auction-app-logo%201.png" alt="Your Photo" />
        </Grid>
      )}
    </Grid>
  );
};

export default Header;