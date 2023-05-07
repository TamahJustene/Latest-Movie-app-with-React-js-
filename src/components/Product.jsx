import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { Link } from 'react-router-dom';

const Product = () => {
  const { name } = useParams();
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState("");
  // const getProducts = async () => {
  //   setLoading(true);
  //   await fetch(`https://api.tvmaze.com/search/shows?q=all&id=${id}`)
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log(res.json());
  //         return res.json();
  //       }
  //     })
  //     .then(() => console.log("Response====>", res.json));
  // };

  const fetchItem = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data[0].show);
        setScore(data[0].score);
      })
      .catch((err) => err.message);
  };

  fetchItem();

  useEffect(() => {
    // getProducts();
  }, []);

  console.log(Product);
  const Loading = () => {
    return <>Loading.......</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <img
              src={Product?.image?.original}
              alt={Product.name}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-lg-6"> 
            <h1 className="display-5 fw-bold">{Product.name}</h1> 
            <h2 className="text secondary">Score: {score}</h2>
            <h3>Type: {Product.type}</h3>
            <h3>Language: {Product.language}</h3>
            <h3>premiered: {Product.premiered}</h3>
            <h3>Ended: {Product.ended}</h3>
            
            {Product.summary}
          </div>
        </div>

        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product"></div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-5 fw-bold">{Product.show}</h1>
              <p className="lead">{Product.show}</p>
             <Link to={`/Forms/${Product.name}`} class="btn btn-primary">Book this movie</Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">{loading ? <loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;