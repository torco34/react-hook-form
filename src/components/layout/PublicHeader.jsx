import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import "../../assets/css/Public.css";
export const PublicHeader = () => {
  return (
    <header  className='headerStyle'>
   <div className='container headerStyle'>
   <h1>Bienvenidos </h1>
    <nav  className="avatarContainerStyle">
      <ul  className='link'>
      <Link to="" className='linkStyle'>Inicio</Link>
      
      <Link to="login" className='linkStyle btn btn-light ' >Registrarse</Link>
        <Link to="login" className='linkStyle btn btn-light ' >Iniciar sesion</Link>
      </ul>
    </nav>

   </div>
    <Outlet />
  </header>
  )
}

  
 
  
  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  };
  
  const nameStyle = {
    fontSize: '1.2em',
    marginLe: '20px',
  };
  
  const navStyle = {
    display: 'flex',
   margin: "30px",
    alignItems: 'center',
  };
  

  
  