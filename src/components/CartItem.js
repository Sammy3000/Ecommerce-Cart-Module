 import { ChevronDown,ChevronUp } from "../icons"
 
 const CartItem=({id,title,price,img,amount})=>{
    return(
       <article className="cart-item">
        <img src={img} alt={title}/>

       </article>
    )
 }
 export default CartItem

 