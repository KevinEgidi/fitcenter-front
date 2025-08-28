import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import "./PageStyles.css";

const Booking = () => {
  return (
    <div className="page-container">
      <h2>
        <FaCalendarPlus className="icon" />{" "}
        <span className="pink-text">Reservar</span> Turno
      </h2>

      <div className="card">
        <p>Selecciona fecha y horario para tu turno.</p>
        {/* Después acá metemos un calendario o selector de fecha */}
      </div>
    </div>
  );
};

export default Booking;
