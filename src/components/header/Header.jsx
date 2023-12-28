import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/header.css";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/img/log.png";
import { BsFillPersonFill } from "react-icons/bs";
import { Button } from "antd";

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

          <Link to="dashboard">pages courser</Link>
          <div className="login">
            <Link to="login">
              <BsFillPersonFill className="login" />
              Login
            </Link>
            <div className="user">
              <span>torcoroma</span>
              <Button>Cerras sesión</Button>
            </div>
          </div>
        </Navbar.Brand>
      </Navbar>
      <Outlet />
    </>
  );
};
