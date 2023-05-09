import React, { useState }from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Inputfield from './Inputfield';
import '../style/registration.css'
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
    
      const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        await axios.post("http://localhost:8080/auth/login", user);
        navigate("/registration");
      };
  return (
    <div className='registerBox'>
        <div className='registerForm'>
          <h2>Login</h2>
          <div className= 'frame179'>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <Inputfield label = "Email:"
                          type= "email" 
                          placeholder= "example@domain.com"
                          name = "email"
                          value={email}
                          onChange={(e) => onInputChange(e)}/>
            </div>
            <div>
              <Inputfield label = "Password:"
                          type= "password" 
                          placeholder= "********"
                          name = "password"
                          value={password}
                          onChange={(e) => onInputChange(e)}/>
            </div>
            <button type="submit">
              Login
            </button>
          </form>
          </div>
        </div>
      </div>
  )
}

export default Login
