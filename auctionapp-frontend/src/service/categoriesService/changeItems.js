import { fetchItems, fetchItemsByCategory } from "../itemsService/fetchItems";

export const changeItems = (id, onItemsChange, visible) => {
    if (id === 0) {
        fetchItems(onItemsChange, visible);
    } else {
        fetchItemsByCategory(onItemsChange, id);
    }
}