import axios from "axios";
import API_URL from "../../constants/constants";

export const fetchItems = (onItemsChange, visible) =>{
    axios.get(`${API_URL}/items/${visible}`)
            .then(response => {
                onItemsChange(response.data);
            })
            .catch(error => {
                console.log(error);
            });
}

export const fetchItemsByCategory = (onItemsChange, id) =>{
    axios.get(`${API_URL}/items/category/${id}`)
        .then(response => {
            onItemsChange(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const fetchSortedItems = (categoryId, value, setItems) =>{
    axios.get(`${API_URL}/items/sortBy?id=${categoryId}&value=${value}`)
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.log(error);
            })
}