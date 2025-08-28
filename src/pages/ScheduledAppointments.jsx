import React from "react";
import { FaClipboardList } from "react-icons/fa";
import "./PageStyles.css";

const ScheduledAppointments = () => {
  return (
    <div className="page-container">
      <h2>
        <FaClipboardList className="icon" />{" "}
        <span className="pink-text">Turnos</span> Agendados
      </h2>

      <div className="card">
        <ul>
          <li>03/09 - 18:00 hs - Spinning</li>
          <li>05/09 - 19:00 hs - Personal Trainer</li>
        </ul>
      </div>
    </div>
  );
};

export default ScheduledAppointments;
