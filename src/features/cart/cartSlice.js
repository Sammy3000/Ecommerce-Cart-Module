import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project';
export const getCartItems = createAsyncThunk('cart/getCartItems',async()=>{
    const response = await axios(`${url}/cart`);
    return response.data
})

const initialState={
    cartItems:cartItems,
    amount:0,
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
        },
        calculateTotals:(state)=>{
            let amount=0
            let total=0
            state.cartItems.forEach(item=>{
                amount+=item.amount
                total+=item.amount * item.price
            })
            state.amount=amount
            state.total=total
        }
    },
    extraReducers:{
        
    }

})
export const {clearCart,removeItem,increase,decrease,calculateTotals}= cartSlice.actions

export default cartSlice.reducer
