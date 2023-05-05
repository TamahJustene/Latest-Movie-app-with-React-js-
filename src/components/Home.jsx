import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark border-0">
        <img src="./assert/bg.jpg" class="card-img" alt="Background"  height= "550px"/>
        <div class="card-img-overlay">
          <h5 class="card-title display-3 fw-bolder nb-0">LATEST MOVIE IN TOWN</h5>
          <p class="card-text lead fs-2">Make your choice below</p>
        </div>
      </div>
       <Products/>
    </div>
  );

}
export default Home;