import React, { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import "./PageStyles.css";

const Booking = () => {
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    try {
      const response = await fetch("http://localhost:3000/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          activity: "Spinning",
          entry: "2025-09-01T18:00:00",
          exit: "2025-09-01T19:00:00",
        }),
      });

      if (!response.ok) throw new Error("Error al reservar");
      const data = await response.json();
      setMessage(`Turno reservado: ${data.activity} el ${data.entry}`);
    } catch (err) {
      setMessage("No se pudo reservar turno");
      console.error(err);
    }
  };

  return (
    <div className="page-container">
      <h2>
        <FaCalendarPlus className="icon" />{" "}
        <span className="pink-text">Reservar</span> Turno
      </h2>

      <div className="card">
        <p>Selecciona fecha y horario para tu turno.</p>
        <button onClick={handleBooking} className="btn">
          Reservar ejemplo
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Booking;
