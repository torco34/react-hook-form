import React from 'react';

import { Link, Outlet } from 'react-router-dom';
export const PublicHeader = () => {
  return (
    <header style={headerStyle}>
    <h1>Bienvenidos </h1>
    <nav  style={avatarContainerStyle}>
      <ul style={navStyle}>
      <Link to="" style={linkStyle}>Inicio ho</Link>
        <Link to="/login" style={linkStyle}>Iniciar sesion</Link>
        {/* <Link to="profile" style={linkStyle}>profile</Link> */}
      </ul>
    </nav>
    <Outlet />
  </header>
  )
}
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  };
  
  const avatarContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  };
  
  const nameStyle = {
    fontSize: '1.2em',
  };
  
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
  };
  
  