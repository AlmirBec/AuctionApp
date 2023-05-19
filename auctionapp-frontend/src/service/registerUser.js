import axios from "axios";
import API_URL from "../constants/constants";

export const registerUser = async(user) =>{
    await axios.post(`${API_URL}/auth/register`, user);
  }