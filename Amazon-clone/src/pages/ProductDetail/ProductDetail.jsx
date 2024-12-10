import React, { useEffect, useState } from 'react'
import classes from './productDetail.module.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endpoint'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from "../../Components/Loader/Loader.jsx";

function ProductDetail() {
  const {productId}=useParams()
  const[product, setproduct]= useState({});
  const [isLoading, setIsLoading]=useState(false)
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })

  }, [])
  return (
    <Layout>
      {isLoading? (<Loader />):(  <ProductCard product= {product} />)}
  
    </Layout>
  )
}

export default ProductDetail
