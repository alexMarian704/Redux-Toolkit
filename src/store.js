import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./functions/cart.js"
import confirmReducer from "./functions/confirm.js"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        confirm:confirmReducer
    },
})