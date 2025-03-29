import React, { useState } from "react";

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

export default function ListaTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const nueva: Tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const tareaCompletada = (id: number) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };
  
  const tareaIncompleta = tareas.filter(tarea => !tarea.completada).length;

  return (
    <div >
      <h2 >Lista de Tareas</h2>
      <div >
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button
          onClick={agregarTarea}
        >
          Añadir
        </button>
      </div>
      <h2 >Total de Tareas pendientes: {tareaIncompleta}</h2>
      <ul>
        {tareas.map((tarea) => (
          <li
            key={tarea.id} 
          >
            <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            
              {tarea.texto}
            </span>
            <button
              onClick={() => tareaCompletada(tarea.id)} 
            >

              {tarea.completada ? "✔" : "○"}
            </button>
            <button
              onClick={() => eliminarTarea(tarea.id)}
            >
              Delete "🗑"
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}