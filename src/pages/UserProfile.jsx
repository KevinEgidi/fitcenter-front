import React from "react";
import { FaUser } from "react-icons/fa";
import "./PageStyles.css";

const UserProfile = () => {
  return (
    <div className="page-container">
      <h2>
        <FaUser className="icon" /> Mi <span className="pink-text">Perfil</span>
      </h2>

      <div className="card">
        <p>
          <strong>Nombre:</strong> Kevin Egidi
        </p>
        <p>
          <strong>Email:</strong> kevin@example.com
        </p>
        <p>
          <strong>Plan:</strong> Premium
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
