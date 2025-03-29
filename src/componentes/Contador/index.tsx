import React, { useState } from "react";
import Lista from "@/componentes/Lista";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if(contador > 0)
    {
      setContador(contador - 1);
    }
   
  };

  return (
    <div className="contador">
      <h1>Contador</h1>
      <button onClick={incrementar}>+</button>
      <span>{contador}</span>
      <button onClick={decrementar}>-</button>
      <Lista id={12} title="Ejemplo" />
    </div>
  );
}
