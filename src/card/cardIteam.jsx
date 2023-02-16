import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./cardIteam.css"
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement, removeItem} from "../store/reducer/cartSlice"


const CardIteam = ({item}) => {
  
  const dispatch = useDispatch();

  const incrementItem=()=>{
    dispatch(increment(item.id))
  }

  const decrementItem=()=>{
    dispatch(decrement(item.id))
  }

  const remove=()=>{
    dispatch( removeItem(item.id))
  }

 
  
  return (
    <div className='mainCard'>
      <div className='card'>   
        <div className='card-right'>
          <h5>{item.title}</h5>
           <img src={item.image} alt="" />
         </div>

        <div className='card-left'>
          <div className='btns'>
          <button className='btn' onClick={decrementItem} disabled={item.quantity===1} >- </button>
          <span>{item.quantity}</span>
           <button className='btn' onClick={incrementItem}>+</button>     
        </div>
     
        <div className='totalPrice'> 
          <div className='number'>{item.quantity}x</div>
          <div className='amount'>${item. totalPrice}</div>
        </div>
      </div>
        <div> <DeleteIcon className='delete' onClick={remove}/></div>
     </div>
 
    </div>
 

  )
}

export default CardIteam