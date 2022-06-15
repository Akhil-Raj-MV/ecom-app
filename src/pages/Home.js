import React ,{ useState, useEffect } from 'react'
import {Route,Switch} from 'react-router-dom'
import CartLayout from '../components/CartLayout'
import TopNav from '../components/Navbar/TopNav'
import ProductLayout from '../components/ProductLayout'
import {commerce} from '../lib/commerce'


const Home = () => {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState({});

  const fetchProducts= async()=>{
      const {data}= await commerce.products.list();
      setProducts(data);
  }
  const fetchCart = async () => {
    const res= await commerce.cart.retrieve();
    setCart(res);
  };

  const addToCartHandler=async(productId,quantity)=>{
      const itemToBeAdded= await commerce.cart.add(productId,quantity);
      setCart(itemToBeAdded.cart)
  }

  

  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])

  return (
    <div>
      <TopNav cartItemNo={cart.total_items}/>
      <Switch>
            <Route exact path="/">
                <ProductLayout products={products} onAddToCart={addToCartHandler}/>
            </Route>
            <Route exact path="/home">
                <ProductLayout products={products} onAddToCart={addToCartHandler}/>
            </Route>
            <Route exact path="/cart">
                <CartLayout cart={cart}  />
            </Route>
      </Switch>
    </div>
  )
}

export default Home