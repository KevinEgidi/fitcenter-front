import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Cart from "../pages/cart";
import Login from "../pages/Login";
import Membership from "../pages/Membership";

export const rutas = [
  <>
    <Route path="/" element={<Landing />} />,
    <Route path="/" element={<Landing />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/membership" element={<Membership />} />,
    <Route path="/cart" element={<Cart />} />
  </>,
];
