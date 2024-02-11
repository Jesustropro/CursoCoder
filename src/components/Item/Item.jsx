import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="container">
    <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id}>
        <img src={producto.img} alt={producto.nombre} />
        <h2 className="nombre">{producto.nombre}</h2>
        <h3 className="precio">$ {producto.precio}.000,00</h3>
      </div>
    </Link>
    </div>
  );
};

export default Item;
