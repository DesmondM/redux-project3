import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    viewCart: true
}
const shoppingCartSlice= createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers:{
        toggleCart(state){
            state.viewCart = !state.viewCart
        }
    }
})

export const cartActions =shoppingCartSlice.actions
export default shoppingCartSlice.reducer