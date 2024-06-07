import { createSlice } from "@reduxjs/toolkit";

const initialItemsState ={
    title: 'Test Item',
    quantity: 0,
    price: 6,
    total:0
}

const shoppingItemsSlice= createSlice({
    name: 'items',
    initialState: initialItemsState,
    reducers:{
        addItem(state){
            state.quantity++
            state.total++
            
        },
        removeItem(state){
            state.quantity--
            state.quantity--
        }

    }
})
export const shoppingItemsActions = shoppingItemsSlice.actions 
export default  shoppingItemsSlice.reducer