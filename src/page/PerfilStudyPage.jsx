import perfil from "../assets/img/icon.png";
import "../assets/css/perfil.css";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { EnrollCoursePage } from "./EnrollCoursePage";
import {
  ButtonReutilizar,
  EnrollmentCourse,
  ProfileInfo,
  DescriptionProject,
} from "../components";
import { useHookCourse } from "../useContext/HooksAllProvider";
import { useContext, useEffect } from "react";

export const PerfilStudyPage = () => {
  const { contextAllHooks } = useHookCourse();
  const {
    showHome,
    setShowHome,
    show,
    setShow,
    setShowText,
    handleShowText,
    showText,
    handleFormulario,
    handleHomePage,
  } = contextAllHooks;
  const { state } = useLocation();

  useEffect(() => {
    localStorage.setItem("show", JSON.stringify(show));
    localStorage.setItem("showHome", JSON.stringify(showHome));
  }, [show, showHome]);

  useEffect(() => {
    const savedShow = localStorage.getItem("show");
    const savedShowHome = localStorage.getItem("showHome");

    if (savedShow) {
      setShow(JSON.parse(savedShow));
    }

    if (savedShowHome) {
      setShowHome(JSON.parse(savedShowHome));
    }
  }, []);

  return (
    <div className="container containerFather">
      <Row>
        <Col xs lg="6">
          <div className="container-color">
            <div className="container  profile-container">
              <img
                src={perfil}
                alt="Imagen de perfil"
                className="profile-image"
              />

              <div className="text-profile">
                Nombre estudiante:
                <p className="username text-uppercase">{state?.name}</p>
              </div>
            </div>
          </div>

          <div className="profile-content    ">
            <ButtonReutilizar
              text="Materias en proceso"
              onClick={handleFormulario}
            />
            <ButtonReutilizar
              text="formulario dinámico"
              onClick={handleHomePage}
            />

            <ButtonReutilizar
              text="descripción del proyecto"
              onClick={handleShowText}
            />
          </div>

          <div className="text-perfil">
            <ProfileInfo
              name={state?.name}
              location="Colombia"
              education="Formación media"
            />
          </div>
        </Col>

        <Col xs="6">
          <div className="body-perfil">
            {show ? <EnrollmentCourse /> : null}
            {showHome ? <EnrollCoursePage /> : null}
            {showText && <DescriptionProject />}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="body-perfil"></div>
        </Col>
      </Row>
    </div>
  );
};
