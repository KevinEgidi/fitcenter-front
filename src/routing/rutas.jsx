import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Cart from "../pages/cart";
import HomeView from "../pages/HomeView";
import UserProfile from "../components/Landing/UserProfile";
import Turnos from "../components/Landing/Turnos";
import TurnosAgendados from "../components/Landing/TurnosAgendados";
import HistorialCompra from "../components/Landing/HistorialCompra";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

export const rutas = [
  <>
  {/* Rutas publicas */}
    <Route path="/" element={<Landing />} />
  {/* Rutas privadas */}
   <Route element={<ProtectedRoute />}>
    <Route path="/cart" element={<Cart />} />
    <Route path="/profile" element={<HomeView />} />
    <Route path="/perfil" element={<UserProfile />} />
    <Route path="/turno" element={<Turnos />} />
    <Route path="/agendados" element={<TurnosAgendados />} />
    <Route path="/historial" element={<HistorialCompra />} />
    <Route path="/dashboard" element={<Dashboard/>} />
  </Route>
  </>,
];
