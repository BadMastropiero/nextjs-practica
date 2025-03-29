import ContadorProducto from "@/componentes/Contador/contador";
import Incremental from "@/componentes/Contador/incremental";
import ListaTareas from "@/componentes/Formulario/agregarItems";
import React, { useState } from "react";

interface Producto {
    id: number;
    name: string;
    cantidad: number;
    categoria?:string;
    estado?:boolean;
}

export default function ProductoLista() {

    const [productosTiendaX, setProductos] = useState<Producto[]>([
        { id: 1, name: "Freddy", cantidad: 0,estado:true },
        { id: 2, name: "Alex", cantidad: 0 },
        { id: 3, name: "Enrique", cantidad: 0 },
    ]);

    const actualizarCantidad = (id: number, nuevaCantidad: number) => {
        setProductos((prevProductos) =>
            prevProductos.map((producto) =>
                producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
            )
        );
    };

    const totalItems = productosTiendaX.reduce((total, producto) => total + producto.cantidad, 0);
    
    return (
        <div>
            {productosTiendaX.map((producto) => (
                <ContadorProducto
                    key={producto.id}
                    producto={producto}
                    onCantidadChangeX={actualizarCantidad}
                />
            ))}
            <h3>Total de items: {totalItems}</h3>
            {/*<pre>{JSON.stringify(productosTiendaX, null, 2)}</pre> */}

            <br />
            {/* <Incremental/>
          <ListaTareas/>  */}
        </div>
    );
}