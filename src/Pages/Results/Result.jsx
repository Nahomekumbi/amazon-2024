import React,{useState} from 'react'
import classes from "./Result.module.css"
import LayOut from '../../Components/LayOut/LayOut'
import {useParams} from "react-router-dom"
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import { useEffect } from 'react'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function Result() {
  const {categoryName}=useParams()
  const [results, setResults]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Result</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
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
    </LayOut>
  );
}

export default Result