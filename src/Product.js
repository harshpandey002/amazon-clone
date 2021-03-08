import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>Oppo Reno 4</p>
        <p className="product_price">
          <small>$</small>
          <strong>400</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/81k8R2Z8nWL._AC_UL480_FMwebp_QL65_.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
