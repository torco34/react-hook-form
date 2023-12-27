import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/header.css";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/img/log.png";
import { BsFillPersonFill } from "react-icons/bs";
import { LoginForm } from "../LoginForm";
export const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Navbar.Brand className="brand">
          <Link to="/">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="rounded-circle"
            />{" "}
            <h4>Inscripción de estudiante</h4>
          </Link>

          <Link to="/page">pages courser</Link>
          <Link to="/tecclas">
            <BsFillPersonFill className="login" />
            <p>Perfil</p>
          </Link>
          <LoginForm />
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
