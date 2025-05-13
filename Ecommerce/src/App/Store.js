import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Features/products/ProductSlice"
import cartReducer from "../Features/cart/cartSlice"
export const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: ProductReducer
    }
})