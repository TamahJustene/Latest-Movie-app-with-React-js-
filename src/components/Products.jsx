import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from './Product';



const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let CopmonentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      if (CopmonentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        CopmonentMounted = false;

      }

    }

    getProducts();
  }, [])

  const Loading = () => {
    return (
      <>
       <div className="col-md-3">
        <Skeleton/>
       </div>

      </>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        {filter.map((Products) => {
          return (
            <>
            <div className="col-md-3">
              <div class="card" >
                <img src=".." class="card-img-top" alt={Products.score}/>
                <div class="card-body">
                  <h5 class="card-title">{Products.show.name}</h5>
                  <p class="card-text"></p>
                  <Link to={`/Product/${Products.show.id}`} class="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
            </>
          )
        })}

      </>
    )

  }


  return (
    <>
      <div className="containers">
        <div className="row">
          <div className="col-12">
            <h1>Latest movies </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>

      </div>

    </>
  );
}

export default Products;