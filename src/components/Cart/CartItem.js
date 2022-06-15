import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Stack } from '@mui/material'

const CartItem = ({item}) => {

  return (
    <Card className="cart-item">
      <CardMedia image={item.image.url} alt={item.name} sx={{ height: 200}}/>
      <CardContent >
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions >
        <div >
          <Stack direction="row">
            <Button type="button" size="small">-</Button>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button type="button" size="small" >+</Button>
          </Stack>
        </div>
        <Button variant="contained" type="button" color="info">Remove</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem