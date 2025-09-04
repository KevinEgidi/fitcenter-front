import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Cart from "../pages/cart";
import HomeView from "../pages/HomeView";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import UserProfile from "../pages/UserProfile";
import Booking from "../pages/Booking";
import ScheduledAppoiments from "../pages/ScheduledAppointments";
import PurchaseHistory from "../pages/PurchaseHistory";
import Turns from "../components/Landing/Turns";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

export const rutas = [
  <>
    {/* Rutas publicas */}
    <Route path="/" element={<Landing />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/profile" element={<HomeView />} />
    <Route path="/users" element={<UserProfile />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/agendados" element={<ScheduledAppoiments />} />
    <Route path="/historial" element={<PurchaseHistory />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/turns" element={<Turns />} />
    {/* Rutas privadas */}
    <Route element={<ProtectedRoute />}></Route>
  </>,
];
