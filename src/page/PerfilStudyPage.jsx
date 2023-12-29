import React from "react";
import perfil from "../assets/img/icon.png";
import "../assets/css/perfil.css";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "antd";
import { useState } from "react";
import { EnrollCoursePage } from "./EnrollCoursePage";
import { BiSolidHide } from "react-icons/bi";
import { EnrollmentCourse } from "../components";
import { BiUserCircle } from "react-icons/bi";
export const PerfilStudyPage = () => {
  const [show, setShow] = useState(false);
  const { state } = useLocation();
  const navigation = useNavigate();
  const handleMaterial = () => {
    // navigation("/enrollment", { replace: true });
    setShow(!show);
  };
  return (
    <div className="container containerFather">
      <Row>
        <Col xs={12} md={6}>
          <div className="container-color">
            <div className="container  profile-container">
              <img
                src={perfil}
                alt="Imagen de perfil"
                className="profile-image"
              />

              <div className="text-profile">
                Nombre estudiante:
                <p className="username">{state?.name}</p>
              </div>
            </div>
          </div>

          <div className="profile-content  ">
            <Button
              onClick={handleMaterial}
              style={{
                background: "#fff",
                color: "#666",
                height: "40px",
                textAlign: "center",
              }}
            >
              {!show ? "Inscripción de materias" : "Cerrar   formulario    "}
            </Button>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="body-perfil">{show && <EnrollmentCourse />}</div>
        </Col>
        <Col xs={12} md={6}>
          <p>
            en este perfil encontraras un formulario donde podras escribir la
            materias y asignales un profeso en este formulario esta hecho con
            fieldes array de
          </p>
        </Col>
      </Row>
    </div>
  );
};
