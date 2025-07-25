import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import NavBar from "../components/Layaut/NavBar";
import Footer from "../components/Layaut/Footer";
import Cart from "../pages/cart";
import HomeView from "../pages/HomeView";
import UserProfile from "../components/Landing/UserProfile";
import Turnos from "../components/Landing/Turnos";
import TurnosAgendados from "../components/Landing/TurnosAgendados";
import HistorialCompra from "../components/Landing/HistorialCompra";

export const rutas = [
  <>
    <Route path="/" element={<Landing />} />
    <Route path="/" element={<Landing />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/profile" element={<HomeView />} />
    <Route path="/perfil" element={<UserProfile />} />
    <Route path="/turno" element={<Turnos />} />
    <Route path="/agendados" element={<TurnosAgendados />} />
    <Route path="/historial" element={<HistorialCompra />} />
  </>,
];
