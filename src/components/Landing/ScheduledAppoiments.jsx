// import React from "react";

// const TurnosAgendados = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Turnos agendados</h2>
//     </div>
//   );
// };

// export default TurnosAgendados;

import React, { useEffect, useState } from "react";

const ScheduledAppointmentsList = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/booking")
      .then((res) => res.json())
      .then((data) => setTurnos(data))
      .catch((err) => console.error("Error cargando turnos:", err));
  }, []);

  if (turnos.length === 0) {
    return <p>No tenés turnos agendados.</p>;
  }

  return (
    <ul>
      {turnos.map((t) => (
        <li key={t.id}>
          {t.fecha} - {t.hora} ({t.actividad})
        </li>
      ))}
    </ul>
  );
};

export default ScheduledAppointmentsList;
