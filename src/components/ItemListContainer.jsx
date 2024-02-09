import React from "react";
import { data } from "../data";

const ItemListContainer = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  Total,
  setTotal,
}) => {
  const onAddProducts = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setTotal(Total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(Total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

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
export default ItemListContainer;
