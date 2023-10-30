import React, { useState } from "react";

export const SoloReact = () => {
  const elementos = ["Elemento 1", "alemento 2", "olemento 3"];
  const [selecciones, setSelecciones] = useState([]);

  const handleSeleccion = (elemento) => {
    setSelecciones([...selecciones, elemento]);
  };

  return (
    <div>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index} onClick={() => handleSeleccion(elemento)}>
            {elemento}
          </li>
        ))}
      </ul>
      <p>Selecciones anteriores: {selecciones.join(", ")}</p>
    </div>
  );
};
