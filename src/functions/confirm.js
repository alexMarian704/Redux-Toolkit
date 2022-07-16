import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open: false,
}

const confirmSlice = createSlice({
    name: "confirm",
    initialState,
    reducers: {
        openConfirm: (state) => {
            state.open = true;
        },
        closeConfirm: (state) => {
            state.open = false;
        }
    }
})

export const { openConfirm, closeConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;
