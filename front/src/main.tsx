import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx';
import ForgotPassword from './pages/ForgotPassword.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
import Home from './pages/Home.tsx';

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
