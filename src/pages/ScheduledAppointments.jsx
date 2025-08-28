import React, { useEffect, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import "./PageStyles.css";

const ScheduledAppointments = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <div className="page-container">
      <h2>
        <FaClipboardList className="icon" />{" "}
        <span className="pink-text">Turnos</span> Agendados
      </h2>

      <div className="card">
        {bookings.length === 0 ? (
          <p>No tienes turnos agendados.</p>
        ) : (
          <ul>
            {bookings.map((b) => (
              <li key={b.id}>
                {new Date(b.entry).toLocaleDateString()} -{" "}
                {new Date(b.entry).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                hs - {b.activity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ScheduledAppointments;
