import React from 'react'
import "./productCard.css"
import { useDispatch } from "react-redux";
import {addItem} from "../store/reducer/cartSlice"


const ProductCard = (props) => {
    const {id,title,image,desc,price}=props.item

    const dispatch=useDispatch()
    const addToCard=()=>{
      dispatch(addItem({
        id,
        image,
        title,
        price
      }))
    }
  
  return (

      <div className='product_item'>
        <div className='product_img'>
            <img src={image} alt="" />
        </div>
        <div className='product_content'>
            <h5 className='title'>{title}</h5>
            <p className='price'> $ {price}</p>
            <p className='desc'>{desc}</p>   
        </div>
        <div className='add_btn'>
        <button className='add' onClick={addToCard}> Add To Bag</button>
        </div>

        {/* <button onClick={notify}>Notify!</button> */}
    
      
      </div>

 
  )
}

export default ProductCard