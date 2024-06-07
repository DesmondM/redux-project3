import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './shoppingCartSlice'
import itemsReducer from "./shoppingItemsSlice";

const store=configureStore({
    reducer: {cart: cartReducer, items:itemsReducer}
})

export default store