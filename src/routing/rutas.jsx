import React from "react";
import {Route} from 'react-router-dom';
import Landing from "../pages/Landing";
import Cart from "../pages/cart";
import Dashboard from "../pages/Dashboard";


export const rutas = [
    <>
        <Route path="/" element={<Landing/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
    </>
]