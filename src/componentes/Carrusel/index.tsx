import React, { useState } from "react";

interface CarruselProps {
  imagenes: string[];
}

export default function Carrusel({ imagenes }: CarruselProps) {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div >
      <img
        src={imagenes[indice]}
        alt={`Imagen ${indice + 1}`}
      />

      {/* Botón Anterior */}
      <button
        onClick={anterior}
      >◀</button>

      {/* Botón Siguiente */}
      <button
        onClick={siguiente}
      >▶</button>

      {/* Indicador */}
      <div>
        {indice + 1} / {imagenes.length}
      </div>
    </div>
  );
}