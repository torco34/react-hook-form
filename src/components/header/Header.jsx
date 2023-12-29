import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/header.css";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/img/log.png";
import { BsFillPersonFill } from "react-icons/bs";
import { Button } from "antd";

export const Header = () => {
  const { state } = useLocation();
  const navigation = useNavigate();
  const onLogout = () => {
    navigation("/login", { replace: true });
  };
  const handleMaterial = () => {
    navigation("/enrollment", { replace: true });
  };
  console.log(state);
  return (
    <>
      <Navbar className="header">
        <Navbar.Brand className="brand">
          <div className="logo">
            <Link to="/dashboard">
              <img
                alt=""
                src={logo}
                width="50"
                height="50"
                className="rounded-circle"
              />{" "}
              <h4>Inscripción de estudiante</h4>
            </Link>
          </div>

          <div className="login">
            <BsFillPersonFill
              style={{
                fontSize: "30px",
                color: "#fff",
              }}
            />
            {state?.logged ? (
              <div className="user">
                <span>{state?.name}</span>
                <Button onClick={onLogout}>Cerras sesión</Button>
               
              </div>
            ) : (
              <div className="user">
                <Button onClick={onLogout}>iniciar sesion</Button>
              </div>
            )}
          </div>
        </Navbar.Brand>
      </Navbar>
      <Outlet />
    </>
  );
};
