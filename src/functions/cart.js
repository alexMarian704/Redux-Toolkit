import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const url = "https://jsonplaceholder.typicode.com/photos"

const initialState = {
    cartItems: [],
    amount: 3,
    total: 0,
    loading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
        .then(res => res.json())
        .catch((err) => console.log(err));
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const item = action.payload
            state.cartItems = state.cartItems.filter((x) => x.id !== item)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((x) => x.id === payload.id)
            cartItem.albumId = cartItem.albumId + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((x) => x.id === payload.id)
            if (cartItem.albumId > 1)
                cartItem.albumId = cartItem.albumId - 1;
            else {
                state.cartItems = state.cartItems.filter((x) => x.id !== payload.id)
            }
        },
        cartPrice: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.albumId;
                total += item.albumId * item.id;
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers:{
        [getCartItems.pending]:(state) => {
            state.loading=true;
        },
        [getCartItems.fulfilled]:(state , action) => {
            state.loading=false;
            let filterArray = action.payload.filter((x)=> x.id <= 5)
            console.log(filterArray)
            state.cartItems = filterArray
        },
        [getCartItems.rejected]:(state) => {
            state.loading=false;
        },
    }
})

export const { clearCart, removeItem, increase, decrease, cartPrice } = cartSlice.actions;

export default cartSlice.reducer;