import axios from "axios";
import API_URL from "../constants/constants";

export const fetchCategories = (setCategories) =>{
    axios.get(`${API_URL}/category/`)
    .then(response => {
        setCategories(response.data);
    })
    .catch(error => {
        console.log(error);
    });
  }