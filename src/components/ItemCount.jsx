import React, { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const resta = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const suma = () => {
    if (contador < 12) {
      setContador(contador + 1);
    }
  };

  const confirmacion = () => {
    alert("Añadiste" + contador + " al Carrito." );
  };

  return (
    <div>
      <p>Cantidad: (contador)</p>

      <button onClick={resta}>↓</button>

      <button onClick={suma}>↑</button>

      <button onClick={confirmacion}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
