import React ,{ useState, useEffect } from 'react'
import TopNav from '../components/Navbar/TopNav'
import ProductLayout from '../components/ProductLayout'
import {commerce} from '../lib/commerce'


const Home = () => {
  const [products,setProducts]=useState([]);
  // const [cart,setCart]=useState({});

  const fetchProducts= async()=>{
      const {data}= await commerce.products.list();
      setProducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return (
    <div>
      <TopNav/>
      <ProductLayout products={products}/>
    </div>
  )
}

export default Home