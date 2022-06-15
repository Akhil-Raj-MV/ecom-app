import React from 'react';
import Products from "./Products/Products";

const ProductLayout = ({products,onAddToCart}) => {
  return (
        <div style={{margin:"30px"}}>
            <Products products={products} onAddToCart={onAddToCart}/>
        </div>
  )
}

export default ProductLayout