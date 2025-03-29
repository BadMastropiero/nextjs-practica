import Carrusel from "@/componentes/Carrusel";

export default function App() {
  const imagenes = [
    ""
  ];

  return (
    <div >
      <h1>Carrusel de Imágenes</h1>
      <Carrusel imagenes={imagenes} />
    </div>
  );
}