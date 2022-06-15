import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom';
import CartItem from './Cart/CartItem';



const CartLayout = ({cart}) => {

    if (!cart.line_items) return 'Loading';

    const renderEmptyCart=()=>(
            <Typography variant="subtitle1">You have no items in your shopping cart,
                <Link to="/">start adding some items to cart</Link>!
            </Typography>
    )

    const renderCart=()=>(
        <div style={{padding:"10px"}}>
        <Grid container spacing={3}>
          {cart.line_items.map((lineItem) => (
            <Grid item xs={12} sm={4} key={lineItem.id}>
              <CartItem item={lineItem} />
            </Grid>
          ))}
        </Grid>
 
              <Stack direction="row" justifyContent="flex-start" alignItems="center" mt={3}>
                <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
              </Stack>
              
              <Stack direction="row" spacing={3} justifyContent="flex-end">
                  <Button  size="large" type="button" variant="contained" color="error">Empty cart</Button>
                  <Button component={Link} to="/checkout" size="large" type="button" variant="contained" color="success">Checkout</Button>
              </Stack>
      </div>
    )

  return (
        <Container>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Typography mt={3} align="center" variant="h4" gutterBottom>Your Shopping Cart</Typography>
                </div>
                { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </Container>
  )
}

export default CartLayout