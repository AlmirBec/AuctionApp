import React, { useState }from 'react'
import { useNavigate } from "react-router-dom";
import { FormControl, Input, InputLabel, Button, Grid } from '@mui/material';
import { loginUser } from '../service/userService/loginUser';

const Login = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const {email, password} = user;
    
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) => {
      e.preventDefault();
      loginUser(user);
        navigate("/items");
    };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{width: "40%", margin:"50px auto",
     border: "1px solid gray" }}>
    <Grid item xs={12} sm={8} md={6}>
      <h2 style={{textAlign: 'center'}}>Login</h2>
      <form onSubmit={onSubmit}>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel htmlFor="email-input" variant='standard'
              style={{ fontFamily: 'Lato', color: '#252525',fontWeight: "600",
              fontSize: "16px" }} >Email</InputLabel>
              <Input
                id="email-input"
                type="email"
                name="email"
                value={email}
                placeholder='user@domain.com'
                onChange={onInputChange}
                style={{ border: "1px solid gray", color: "#9B9B9B"}}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <InputLabel htmlFor="password-input"
              style={{ fontFamily: 'Lato', color: '#252525',fontWeight: "600",
              fontSize: "16px" }} variant='standard'>Password</InputLabel>
              <Input
                id="password-input"
                type="password"
                name="password"
                value={password}
                placeholder='********'
                onChange={onInputChange}
                style={{ border: "1px solid gray", color: "#9B9B9B" }}
              />
            </FormControl>
          </Grid>
          <Grid item sx={{p:2}} textAlign={'center'}>
            <Button type="submit" variant="contained" fullWidth sx={{bgcolor: "#8367D8"}}>
              Login
            </Button>
          </Grid>
      </form>
    </Grid>
  </Grid>
  )
}

export default Login
