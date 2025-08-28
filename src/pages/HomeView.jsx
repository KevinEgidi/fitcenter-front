import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCalendarPlus,
  FaClipboardList,
  FaHistory,
  FaDumbbell,
} from "react-icons/fa";
import "./HomeView.css";

function HomeView() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>
        ¡Hola <span className="pink-text">Kevin</span>!
      </h2>

      <div className="shortcuts">
        <div className="shortcut" onClick={() => navigate("/users")}>
          <FaUser className="icon" />
          <p>Perfil</p>
        </div>
        <div className="shortcut" onClick={() => navigate("/booking")}>
          <FaCalendarPlus className="icon" />
          <p>Reservar</p>
        </div>
        <div className="shortcut" onClick={() => navigate("/agendados")}>
          <FaClipboardList className="icon" />
          <p>Turnos</p>
        </div>
        <div className="shortcut" onClick={() => navigate("/historial")}>
          <FaHistory className="icon" />
          <p>Historial</p>
        </div>
      </div>

      <div className="section">
        <h3>Entrenamiento</h3>
        <div className="training-card">
          <FaDumbbell className="icon" />
          <div>
            <strong>Ver plan actual</strong>
            <p>Entrenamiento personalizado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
