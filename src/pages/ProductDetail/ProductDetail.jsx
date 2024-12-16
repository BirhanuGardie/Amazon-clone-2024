import React, { useEffect, useState } from 'react'
import classes from './productDetail.module.css'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endpoint'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from "../../Components/Loader/Loader.jsx";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Initialize with null
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); // Set loading to false after successful fetch
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set loading to false after error
      });
  }, [productId]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        product && <ProductCard 
        product={product} 
        flex={true} 
        renderDesc={true} 
        renderAdd={true}
        /> // Render only if product exists
      )}
    </Layout>
  );
}

export default ProductDetail;
