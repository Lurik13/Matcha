import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import ForgotPassword from './pages/ForgotPassword.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import ResetPassword from './pages/ResetPassword.tsx'
import Settings from './pages/Settings.tsx'
import PageNotFound from './pages/PageNotFound.tsx'

const queryClient = new QueryClient()

const root = document.getElementById("root") as HTMLElement
createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
