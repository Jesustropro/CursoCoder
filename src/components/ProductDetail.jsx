import React from "react";
import { Card } from "react-bootstrap";

const ProductDetail = ({ product }) => {
  return (
    <div className="container-items">
    {data.map((product) => (
      <div className="item" key={product.id}>
        <figure>
          <img src={product.img} alt={product.nameProduct} />
        </figure>
        <div className="info-product">
          <h2>{product.nameProduct}</h2>
          <p className="price">${product.price}</p>
          <button
            className="btn-add-cart"
            onClick={() => onAddProducts(product)}
          >
            +
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default ProductDetail;