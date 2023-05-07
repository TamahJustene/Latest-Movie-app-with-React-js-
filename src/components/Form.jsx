import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { Link } from 'react-router-dom';

const Forms = () => {
  const { name } = useParams();
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchItem = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setForms(data[0].show);
      })
      .catch((err) => err.message);
  };

  fetchItem();

  useEffect(() => {
    // getProducts();
  }, []);


  console.log(Forms);
  const Loading = () => {
    return <>Loading.......</>;
  };
  const ShowForms = () => {
    return (
      <>
       <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
        
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">{loading ? <loading /> : <ShowForms />}</div>
      </div>
    </>
  );
};

export default Forms;