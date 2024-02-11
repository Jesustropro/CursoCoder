import React, { useState } from "react";
import "../ItemDetail/ItemDetail"
import "./ItemCount.css";

const ItemCount = ({ initial, stock }) => {
  const [contador, setContador] = useState(1);

  const resta = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const suma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const confirmacion = () => {
    alert("Añadiste " + contador + " al Carrito.");
  };

  return (
    <>
      <div className="contador">
        <button className="btn-contador" onClick={resta}>
          ↓
        </button>

        <p className="txt-contador">{contador}</p>

        <button className="btn-contador" onClick={suma}>
          ↑
        </button>
      </div>

      <button className="btn-confirmacion" onClick={confirmacion}>
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
