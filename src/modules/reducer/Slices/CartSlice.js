import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            // console.log(state.cartItems)
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.title === newItem.title
            );

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalItemPrice =
                    existingItem.quantity * existingItem.disprice;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1, totalItemPrice: newItem.disprice });
            }
        },
        RemoveFromCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.title === newItem.title
            );

            if (existingItem.quantity >= 2) {
                existingItem.quantity--;
                existingItem.totalItemPrice =
                    existingItem.quantity * existingItem.disprice;
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.title !== action.payload.title)
                }
            }
        }
    }
})

export const { AddToCart, RemoveFromCart } = CartSlice.actions

export default CartSlice.reducer