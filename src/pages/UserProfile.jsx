import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import "./PageStyles.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users/1") // ejemplo: user con ID 1
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando perfil...</p>;
  if (!user) return <p>No se pudo cargar el perfil</p>;

  return (
    <div className="page-container">
      <h2>
        <FaUser className="icon" /> Mi <span className="pink-text">Perfil</span>
      </h2>

      <div className="card">
        <p>
          <strong>Nombre:</strong> {user.first_name} {user.last_name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {user.phone}
        </p>
        <p>
          <strong>Dirección:</strong> {user.address}
        </p>
        <p>
          <strong>Usuario:</strong> {user.username}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
