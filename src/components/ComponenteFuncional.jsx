import React from "react";

const ComponenteFuncional = () => {
  const handleSubmit = (evento) => {
    evento.preventDefault();
    alert("Formulario enviado");
    alert("Hola");
  };

  return (
    <div>
      <h1>Formulario con preventDefault</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingrese su nombre" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ComponenteFuncional;
