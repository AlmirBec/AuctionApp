import axios from "axios";
import API_URL from "../constants/constants";

export const loginUser = (user) =>{
     axios.post(`${API_URL}/auth/login`, user)
      .then(response => {
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.error(error);
      });
  }