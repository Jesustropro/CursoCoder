import React from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  return (
    <div className="item">
      <img className="img" src={producto.img} alt={producto.nombre} />
      <h1 className="nombre">{producto.nombre}</h1>
      <p className="info-product">{producto.description}</p>
      <h3 className="stock">En stock: {producto.stock}</h3>
      <h3 className="precio">$ {producto.precio}.000,00</h3>

      <ItemCount initial={1} stock={producto.stock} />
    </div>
  );
};

export default ItemDetail;
