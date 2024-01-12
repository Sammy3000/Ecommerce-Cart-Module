import CartItem from "./CartItem"
import { useSelector } from "react-redux"

const CartContainer=()=>{
    const {cartItems,amount,total}=useSelector(store=>store.cart)
return(
<div>
    Cart container
</div>
)
}
 
export default CartContainer