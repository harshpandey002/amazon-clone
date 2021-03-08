import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg"
        />
        <div className="home_row">
          <Product />
          <Product />
        </div>
        <div className="home_row"></div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
