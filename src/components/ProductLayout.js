import React, {useState } from 'react';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Products from "./Products/Products";


const ProductLayout = ({products,onAddToCart}) => {

  const [sort,setSort]=useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
    if(event.target.value==="plh"){
      products.sort((a,b)=>{
        if(a.price.raw===b.price.raw){
          return a.name-b.name
        }
        return a.price.raw-b.price.raw
      })
    }
    if(event.target.value==="phl"){
      products.sort((a,b)=>{
        if(a.price.raw===b.price.raw){
          return a.name-b.name
        }
        return b.price.raw-a.price.raw
      })
    }
    if(event.target.value==="none"){
      products.sort((a,b)=>{
        return a.created-b.created;
      })
    }
    
  
  };

  if(!products.length){
    return(
      <div style={{display:"flex", justifyContent:"center"}}>
          <Typography mt={20} variant='h4'>
          Loading the products...
          </Typography>
      </div>
  )
  }

  return (
       <>
        <div>
            <FormControl sx={{marginTop:"10px",padding:"20px"}}>
          <FormLabel id="demo-controlled-radio-buttons-group">Sort By</FormLabel>
          <RadioGroup
             row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={sort}
            onChange={handleChange}
          >
            <FormControlLabel value="none" control={<Radio color="success"/>} label="None" />
            <FormControlLabel value="plh" control={<Radio color="success"/>} label="price low to high" />
            <FormControlLabel value="phl" control={<Radio color="success"/>} label="price high to low" />
          </RadioGroup>
        </FormControl>
        </div>

         <div style={{margin:"30px"}}>
            <Products products={products} onAddToCart={onAddToCart}/>
        </div>

      </>
  )
}

export default ProductLayout