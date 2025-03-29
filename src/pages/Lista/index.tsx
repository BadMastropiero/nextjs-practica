import { useState } from "react";

interface Tarea {
  id: number;
  Descripcion: string;
  completada: boolean;
}

export default function ListaTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const nueva: Tarea = {
      id: Date.now(),
      Descripcion: nuevaTarea,
      completada: false,
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  const toggleCompletada = (id: number) => {
    setTareas(
      tareas.map((a) =>
        a.id === id ? { ...a, completada: !a.completada } : a
      )
    );
  };

  const eliminarTarea = (idPrueba: number) => {
    setTareas(tareas.filter((a) => a.id !== idPrueba));
  };

  const tareasIncompletas = tareas.filter((a) => !a.completada).length;

  return (
    
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea} disabled={nuevaTarea.trim() === ""}>
        Agregar
      </button>

      <p data-testid="todo-count">Tareas pendientes: {tareasIncompletas}</p>

      <table border="1" style={{ width: "50%", marginTop: "20px",marginLeft:"390px" }}>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Completada</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td
                style={{
                  textDecoration: tarea.completada ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleCompletada(tarea.id)}
              >
                {tarea.Descripcion}
              </td>
              <td>{tarea.completada ? "🟢" : "🔴"}</td>
              <td>
                
                <button className="trash-icon" onClick={() => eliminarTarea(tarea.id)} style={{ marginLeft: "10px" }}>
                🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
