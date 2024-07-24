import { useState } from 'react';

import { BsCaretDownFill, BsGearFill, BsPersonFill, BsPower, BsXLg } from "react-icons/bs";

import "./css/menuUser.css";
const UserMenu = ({ onLogout, onSettings, onProfile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-menu ">
      <button onClick={toggleMenu} className="user-menu-button">
     
      
      {isOpen ?<BsXLg className='fw-bold'/>:  <BsCaretDownFill />}
      </button>
    
      {isOpen && (
        <ul className="user-menu-list shadow fw-bold rounded-bottom">
         
          <li onClick={onProfile}>
          <BsPersonFill className='mx-2'/>
          Perfil</li>
          <li onClick={onSettings}>
          <BsGearFill  className='mx-2 '/>Configuración</li>
          <li onClick={onLogout} className=''>
          <BsPower className='mx-2   fw-bold'/>Cerrar Sesión</li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
