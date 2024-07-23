

import { Button } from "antd";
import { Link, Outlet, useLocation } from 'react-router-dom';

import { useHookCourse } from "../../useContext/HooksAllProvider";
// Simulación de un token (en un caso real, obtendrás esto de tu estado de autenticación)
const token = 'fake-token';

export const PrivateHeader = () => {
  // Si no hay token, no mostramos el header
  const { contextAllHooks } = useHookCourse();
  const {  login } = contextAllHooks;
  const { state } = useLocation();
// const login = ()=>{

// }

  return (
    <header style={headerStyle}>
    <div className="container d-flex justify-content-between">

    <div style={avatarContainerStyle}>
    <Link to="" style={linkStyle}>Home</Link>
    <Link to="/perfil" style={linkStyle}>Perfil</Link>
      </div>
      <nav style={navStyle}>
      <img src={"https://picsum.photos/200"} alt="User Avatar" style={avatarStyle} />
        {state?.logged ? (
    <div className="user ">
    
      <span>{state?.name}</span>
      <Button onClick={login}>Cerrar sesión</Button>
    </div>
  ) : (
    <div className="user ">
       <div className="user ">
     <img src={"https://picsum.photos/200"} alt="User Avatar" style={avatarStyle} />
      <span>{state?.name}</span>
      <Button onClick={login}>Cerrar sesión</Button>
    </div>
    </div>
  )}
      </nav>



    </div>
      <Outlet />
    </header>
  );
};

// Estilos en línea
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
  marginRight: '30px',
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
  fontSize: '1.2em',
  marginRight: '10px',
};

export default PrivateHeader;
