import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Cart from "../pages/cart";
import HomeView from "../pages/HomeView";
import UserProfile from "../components/Landing/UserProfile";
import Booking from "../components/Landing/Booking";
import ScheduledAppoiments from "../components/Landing/ScheduledAppoiments";
import PurchaseHistory from "../components/Landing/PurchaseHistory";
import Dashboard from "../pages/Dashboard";

export const rutas = [
  <>
    <Route path="/" element={<Landing />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/profile" element={<HomeView />} />
    <Route path="/users" element={<UserProfile />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/agendados" element={<ScheduledAppoiments />} />
    <Route path="/historial" element={<PurchaseHistory />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </>,
];
