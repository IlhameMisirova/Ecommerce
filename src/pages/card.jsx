import React from 'react'
import CardIteam from "../card/cardIteam"
import { useSelector } from 'react-redux/es/exports'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Basket from "../card/basket"

const Card = () => {

  const cartProduct =useSelector(state=>state.cart.cartItems)
  return (
    <div>
      {
        cartProduct.length ===0 ? <h6>Your Shopping  <ShoppingBagIcon  sx={{ fontSize: 30}}/> is Empty</h6> : cartProduct.map(item=>(
          <CardIteam item={item} key={item.id}/>
        ))
      }
    
    <Basket/>
    </div>
  )
}

export default Card