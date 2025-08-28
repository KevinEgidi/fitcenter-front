// import React from "react";

// const UserProfile = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Esta es la vista del perfil de usuario</h2>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users") // <-- cambia por tu endpoint real
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error cargando perfil:", err));
  }, []);

  if (!user) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Perfil del Usuario</h2>
      <p>
        <strong>Nombre:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.phone}
      </p>
    </div>
  );
};

export default UserProfile;
