import React from "react";
import perfil from "../assets/img/perfil2.jpg";
import "../assets/css/perfil.css";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "antd";
import { useState } from "react";
import { EnrollCoursePage } from "./EnrollCoursePage";
import { BiSolidHide } from "react-icons/bi";
export const PerfilStudyPage = () => {
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const navigation = useNavigate();
  const handleMaterial = () => {
    // navigation("/enrollment", { replace: true });
    setShow(!show);
  };
  return (
    <div className=" containerFather">
      <Row>
        <Col xs={12} md={12}>
          <div className="container  profile-container">
            <img
              src={perfil}
              alt="Imagen de perfil"
              className="profile-image"
            />

            <div className="profile-content  ">
              <div className="">
                Nombre del alumno:
                <p className="username">{state?.name}</p>
              </div>
              <div className="profile-info">
                Especialización:
                <p className="username">Matemático</p>
                <p>
                  La información del perfil solo la visualiza usted. Solo el
                  nombre de usuario es visible para los demás en.{" "}
                  <BiSolidHide />
                </p>
                <hr></hr>
              </div>
            </div>
            <Button onClick={handleMaterial}>
              {!show ? "Inscripción de materias" : "Cerrar formulario"}
            </Button>
          </div>
        </Col>

        <Col xs={12} md={12}>
          {show && <EnrollCoursePage />}
        </Col>
      </Row>
    </div>
  );
};
