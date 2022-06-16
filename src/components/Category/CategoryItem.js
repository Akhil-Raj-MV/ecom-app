import React, { useEffect, useState } from 'react'
import {commerce} from '../../lib/commerce'
import ProductLayout from '../ProductLayout';

const CategoryItem = ({pro,onAddToCart}) => {

    const [items,setItems]=useState([]);

    useEffect(()=>{
        const {data}=commerce.categories.retrieve('category', { type: `${pro}` })
        setItems(data);
    },[pro])

  return (
    <ProductLayout products={items} onAddToCart={onAddToCart}/>
  )
}

export default CategoryItem