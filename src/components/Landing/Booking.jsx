// import React from "react";

// const Turnos = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Vista para sacar turno</h2>
//     </div>
//   );
// };

// export default Turnos;

import React, { useState } from "react";

const Booking = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");

  const reservarTurno = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fecha, hora, userId: 1 }),
    })
      .then((res) => res.json())
      .then((data) => setMensaje("Turno reservado con éxito ✅"))
      .catch((err) => setMensaje("Error al reservar turno ❌"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reservar Turno</h2>
      <form onSubmit={reservarTurno}>
        <div>
          <label>Fecha: </label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hora: </label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reservar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Booking;
