import React , { useState, useRef, useEffect } from "react";

export default function Incremental() {
  const [cantidad, setCantidad] = useState(0);
  const cantidadPrev = useRef<number | null>(null);
  let incremento=Math.random();
  useEffect(() => {
    cantidadPrev.current = cantidad;
  }, [cantidad]);

  const incrementar = () => {
    setCantidad((prevCantidad) => prevCantidad + incremento);
  };

  return (
    <div >
      <h2>Incremental</h2>
      <p>Valor previo: {cantidadPrev.current ?? "N/A"}</p>
      <p>Valor actual: {cantidad}</p>
      <button onClick={incrementar} >
        Incrementar
      </button>
    </div>
  );
}