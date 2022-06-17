import React from 'react';
import Typography from '@mui/material/Typography';
import Products from "./Products/Products";

const ProductLayout = ({products,onAddToCart}) => {
  if(!products.length){
    return(
      <div style={{display:"flex", justifyContent:"center"}}>
          <Typography mt={20} variant='h4'>
          In a moment...
          </Typography>
      </div>
  )
  }


  return (
        <div style={{margin:"30px"}}>
            <Products products={products} onAddToCart={onAddToCart}/>
        </div>
  )
}

export default ProductLayout