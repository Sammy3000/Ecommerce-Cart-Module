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
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[];
        },
        removeItem:(state,{payload})=>{
            const itemId=payload
            state.cartItems=state.cartItems.filter(item=>item.id!==itemId)
        },
        increase:(state,{payload})=>{
            const cartItem = state.cartItems.find(item=>item.id===payload)
            cartItem.amount =cartItem.amount + 1
        },
        decrease:(state,{payload})=>{
            const cartItem = state.cartItems.find(item=>item.id===payload)
            cartItem.amount =cartItem.amount - 1
        }
    }

})
export const {clearCart,removeItem,increase,decrease}= cartSlice.actions

export default cartSlice.reducer
