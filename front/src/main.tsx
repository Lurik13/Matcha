import React from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(
  <React.StrictMode>
    <App />
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router> */}
  </React.StrictMode>
);
