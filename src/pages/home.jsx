import React from 'react'
import products from '../data/products'
import ProductCard from '../card/productCard'

const home = () => {
  return (
    <div className='main'>
         {
           products.map(item=>(
            <ProductCard item={item} key={item.id}/>
        ))
     }
    </div>
   
  )
}

export default home