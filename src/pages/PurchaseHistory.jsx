import React from "react";
import { FaHistory } from "react-icons/fa";
import "./PageStyles.css";

const PurchaseHistory = () => {
  return (
    <div className="page-container">
      <h2>
        <FaHistory className="icon" />{" "}
        <span className="pink-text">Historial</span> de Compras
      </h2>

      <div className="card">
        <ul>
          <li>Plan Premium - $5000 - 01/08/2025</li>
          <li>Clase Funcional - $1500 - 10/08/2025</li>
        </ul>
      </div>
    </div>
  );
};

export default PurchaseHistory;
