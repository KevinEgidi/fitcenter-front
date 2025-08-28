import React, { useEffect, useState } from "react";
import { FaHistory } from "react-icons/fa";
import "./PageStyles.css";

const PurchaseHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/1/history") // ESTO TENGO Q TOCAR TAMBIEN EN EL BACK
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error("Error fetching history:", err));
  }, []);

  return (
    <div className="page-container">
      <h2>
        <FaHistory className="icon" />{" "}
        <span className="pink-text">Historial</span> de Compras
      </h2>

      <div className="card">
        {history.length === 0 ? (
          <p>No tienes compras registradas.</p>
        ) : (
          <ul>
            {history.map((h) => (
              <li key={h.id}>
                {h.product} - ${h.amount} -{" "}
                {new Date(h.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
