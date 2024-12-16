import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './product.module.css';
import Loader from "../../Components/Loader/Loader.jsx";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch products. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <section className={classes.products__container}>
          {products.map((singleProduct) => (
            <ProductCard 
            renderAdd={true}
            product={singleProduct} 
            key={singleProduct.id} 
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;