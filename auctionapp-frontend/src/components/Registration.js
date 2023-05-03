
import React, { useState }from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
    //let navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
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
    //navigate("/");
  };
  return (
    <div>
      <div>
        <div>
          <h2>Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="firstname">
                First Name:
              </label>
              <br></br>
              <input
                type={"text"}
                placeholder="John"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="LastName">
                Last Name:
              </label>
              <br></br>
              <input
                type={"text"}
                placeholder="Doe"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Email" >
                E-mail
              </label>
              <br></br>
              <input
                type={"email"}
               
                placeholder="user@domain.com"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Password" >
                Password:
              </label>
              <br></br>
              <input
                type={"password"}
                placeholder="********"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
