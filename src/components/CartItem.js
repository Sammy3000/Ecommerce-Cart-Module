 import { ChevronDown,ChevronUp } from "../icons"
 
 const CartItem=({id,title,price,img,amount})=>{
    return(
       <article className="cart-item">
        <img src={img} alt={title}/>
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}</h4>
        </div>
       </article>
    )
 }
 export default CartItem

 