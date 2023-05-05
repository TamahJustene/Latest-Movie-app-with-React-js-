import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Products from './Products';


const Product = () => {
  const {id} = useParams();
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");

      setProduct(await response.json());
      setLoading(false);

    }

    getProducts();
  }, [])
  const Loading = () => {
    return (
      <>
        Loading.......

      </>
    )
  }
  const ShowProduct = () => {
    return (
      <>
       <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src="..." alt={Product.score} height="400px" width= "400px" />
                    <h1 className="display-5 fw-bold">{Product.show}</h1>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{Product.show}</h1>
                    <h2 className="my-4">{Product.show}</h2>
                    <p className="lead">{Product.show}</p>
                    {/* <button onClick={()=>handleCart(Product)} className="btn btn-outline-primary my-5">{cartBtn}</button> */}
                </div>
            </div>
        </div>

      </>
    )
  }


  return (
    <>
      <div className= "container">
        <div className="row">
          {loading ? <loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  )
}

export default Product;