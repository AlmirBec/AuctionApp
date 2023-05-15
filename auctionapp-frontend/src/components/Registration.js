
import React, { useState }from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, Input, InputLabel, Button, Grid } from '@mui/material';


export default function Registration() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "example@gmail.com",
    password: "12345678",
    username: "",
    role: "",
  });

  const { firstname, lastname, email, password} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios.post("http://localhost:8080/auth/register", user);
    navigate("/");
  };
  return ( 
    <Grid container justifyContent="center" alignItems="center" sx={{ width: "40%", margin:"50px auto",
     border: "1px solid gray" }}>
    <Grid item xs={12} sm={8} md={6}>
      <h2 style={{textAlign: 'center'}}>Register</h2>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <FormControl fullWidth>
              <InputLabel htmlFor="firstname-input" variant='standard'
              style={{ fontFamily: 'Lato', color: '#252525',fontWeight: "600",
              fontSize: "16px" }}>First name</InputLabel>
              <Input
                id="firstname-input"
                type="text"
                name="firstname"
                value={firstname}
                onChange={onInputChange}
                style={{ border: "1px solid gray", color: "#9B9B9B" }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel htmlFor="lastname-input" variant='standard'
              style={{ fontFamily: 'Lato', color: '#252525',fontWeight: "600",
              fontSize: "16px" }}>Last name</InputLabel>
              <Input
                id="lastname-input"
                type="text"
                name="lastname"
                value={lastname}
                onChange={onInputChange}
                style={{ border: "1px solid gray", color: "#9B9B9B" }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth variant='standard'>
              <InputLabel htmlFor="email-input"
              style={{ fontFamily: 'Lato', color: '#252525',fontWeight: "600",
              fontSize: "16px" }}>Email</InputLabel>
              <Input
                id="email-input"
                type="email"
                name="email"
                value={email}
                onChange={onInputChange}
                style={{ border: "1px solid gray", color: "#9B9B9B"}}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth variant='standard'>
              <InputLabel htmlFor="password-input"
              style={{ fontFamily: 'Lato', color: '#252525',fontWeight: "600",
              fontSize: "16px" }}>Password</InputLabel>
              <Input
                id="password-input"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
                style={{ border: "1px solid gray", color: "#9B9B9B" }}
              />
            </FormControl>
          </Grid>
          <Grid item sx={{p:2}} textAlign={'center'}>
            <Button type="submit" variant="contained" fullWidth sx={{bgcolor: "#8367D8"}}>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
  )
}
