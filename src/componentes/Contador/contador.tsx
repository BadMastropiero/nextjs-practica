import React, { useState } from "react";


interface Producto {
    id: number;
    name: string;
    cantidad: number;
}

interface ContadorProductoProps {
    producto: Producto;
    onCantidadChangeX: (id: number, nuevaCantidad: number) => void;
}

export default function ContadorProducto({ producto, onCantidadChangeX }: ContadorProductoProps) {
  const [cantidad, setCantidad] = useState<number>(producto.cantidad);

  const incrementar = () => {
    const nuevaCantidad = cantidad + 1;
    setCantidad(nuevaCantidad);
    onCantidadChangeX(producto.id, nuevaCantidad);
  };

  const decrementar = () => {
    const nuevaCantidad = cantidad > 0 ? cantidad - 1 : 0;
    // if(nuevaCantidad<0){
    //   console.log("no acepta numero negativos");
    //   onCantidadChangeX(producto.id, 0);
    //   return;
    // }
    setCantidad(nuevaCantidad);
    onCantidadChangeX(producto.id, nuevaCantidad);
  };

  return (
    <div>
      <h2>{producto.name}</h2>
      <button disabled={producto.cantidad>0? false : true } onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button disabled={producto.name.toUpperCase() == "FREDDY"? false : true} onClick={incrementar}>+</button>
    </div>
  );
}

