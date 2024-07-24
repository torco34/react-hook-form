// src/components/VerticalDashboard.jsx
import React from "react";

import { Link } from "react-router-dom";

import "./css/vertical.css"; // Importa el archivo CSS

export const VerticalDashboard = ({ children }) => {
  return (
    <>
  
      <div className="dashboard">
        <aside className="sidebar">
          <h2 className="sidebar-title">Dashboard</h2>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="Dashboard" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">{children}</main>
      </div>
    </>
  );
};
