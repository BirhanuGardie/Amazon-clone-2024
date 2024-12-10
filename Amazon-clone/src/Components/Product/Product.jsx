import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './product.module.css'
import Loader from "../../Components/Loader/Loader.jsx";

function Product() {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading]=useState(false)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        isLoading(false)
      })
      .catch((err) => {
        console.log(err);
        isLoading(false)
      });
  }, []);

  return (
    <>
    {
      isLoading? (<Loader/>) : ( <section className={classes.products__container}>
        {
          products.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))
        }
      </section>)
    }
   
    </>
  );
}

export default Product;
