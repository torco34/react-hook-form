

import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import { useHookCourse } from "../../useContext/HooksAllProvider";
import UserMenu from "./componesLayout/UserMenu";

import "./css/header.css";

// import { VerticalDashboard } from "./VerticalDashboard";
export const PrivateHeader = () => {
  const navigate = useNavigate();
  const { contextAllHooks} = useHookCourse();
  const { login, logout } = contextAllHooks;
  const { state } = useLocation();
  const handleLogout = () => {
    login();
    navigate("", { replace: true });
    console.log('Cerrando sesión');
  };

  const handleSettings = () => {
    // Lógica para ir a configuración
    console.log('Configuración');
  };

  const handleProfile = () => {
    // Lógica para ir al perfil
    console.log('Perfil');
  };
  const handleClose = () => {
  
    login();
    navigate("", { replace: true });
  }
 

  return (
    <>
   
      {/* <VerticalDashboard /> */}
      <header className="headerPrivate">
      {/* <button>ver</button> */}
     

        <div className="container d-flex justify-content-between">
        <img src={logo} alt="" className="logo" />
          <nav>
            <img
              src={"https://picsum.photos/200"}
              alt="User Avatar"
              className="avatarStyle"
            />
            <span>{state?.name}</span>
         
            <UserMenu onLogout={handleLogout} onSettings={handleSettings} onProfile={handleProfile} />
            {/* <Button className=' ' onClick={handleClose}>Serrar  sesión</Button> */}
          </nav>
        </div>
      </header>
      {/* </VerticalDashboard> */}
    </>
  );
};
