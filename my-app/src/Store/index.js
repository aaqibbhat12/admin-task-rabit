
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Store/cartslice';


const store = configureStore({
    reducer: {
        CART: cartReducer,
    },
});


export { store };
export { addToCart } from '../Store/cartslice';


