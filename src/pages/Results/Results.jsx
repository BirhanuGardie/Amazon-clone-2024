import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endpoint.js";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader.jsx";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product} 
              renderDesc={false}
              renderAdd={true}
              
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
