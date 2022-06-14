import React from 'react';
import Products from "./Products/Products";

const ProductLayout = ({products}) => {
  return (
        <div style={{margin:"30px"}}>
            <Products products={products}/>
        </div>
  )
}

export default ProductLayout