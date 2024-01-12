import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";

const initialState={
    cartItems:cartItems,
    amount:3,
    total:0,
    isLoading:true
}



const cartSlice=createSlice({
    name:'cart',
    initialState
})

export default cartSlice.reducer
