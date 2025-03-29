import React, { useState, useEffect } from "react";
import Lista from "@/componentes/Lista";

// type User = {
//   id: number;
//   name: string;
// };

export default function Cliente() {
  // const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(1);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${setUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  console.log("user", user);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Cliente</h1>
      {/* <ul>
        {users.map((user) => (
          <Lista key={user.id} id={user.id} title={user.name} />
        ))}
      </ul> */}
      {/* <h2>Usuario: {user || "Cargando..."}</h2> */}
      <button onClick={() => setUser(userId + 1)}>Siguiente Usuario</button>
    </div>
  );
}
