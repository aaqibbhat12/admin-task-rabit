import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartCount: 0,
    cartItems: []
};

const cartSlice = createSlice({
    name: 'CART',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex].count += 1;
            } else {

                state.cartItems.push({ ...action.payload, count: 1 });
            }
            state.cartCount += 1;
        },
        removeFromCart: (state, action) => {
            const idToRemove = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === idToRemove);
            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex].count -= 1;
                state.cartCount -= 1;
                if (state.cartItems[existingItemIndex].count === 0) {
                    state.cartItems.splice(existingItemIndex, 1);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
