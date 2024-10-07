import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartCount: 0,
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartCount += 1;
            state.cartItems.push(action.payload);
        }
    }
});

export const { addToCart } = cartSlice.actions;

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export default store;
