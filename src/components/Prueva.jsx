<div className="body-perfil">
  {show ? <EnrollmentCourse /> : null}
  {showHome ? <EnrollCoursePage /> : null}
</div>




import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import perfil from "../assets/img/icon.png";
import "../assets/css/perfil.css";
import {
  ButtonReutilizar,
  EnrollmentCourse,
  EnrollCoursePage,
  ProfileInfo,
} from "../components";
import { useHookCourse } from "../useContext/HooksAllProvider";

const PerfilStudyPage = () => {
  const { contextAllHooks } = useHookCourse();
  const { showHome, setShowHome, show, setShow } = contextAllHooks;
  const { state } = useLocation();

  const handleFormulario = () => {
    setShowHome(true);
    setShow(false);
  };

  const handleHomePage = () => {
    setShow(true);
    setShowHome(false);
  };

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
        <Col xs={12} md={6}>
          <div className="container-color">
            <div className="container profile-container">
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

          <div className="profile-content d-flex gap-3">
            <ButtonReutilizar
              text="Inscripción cursos"
              onClick={handleFormulario}
            />
            <ButtonReutilizar
              text="Cursos en procesos"
              onClick={handleHomePage}
            />
          </div>
          <hr></hr>
          <ProfileInfo
            name={state?.name}
            location="Colombia"
            education="Formación media"
          />
        </Col>

        <Col xs={12} md={6}>
          <div className="body-perfil">{show && <EnrollmentCourse />}</div>
          <div className="body-perfil">{showHome && <EnrollCoursePage />}</div>
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>
    </div>
  );
};

export default PerfilStudyPage;
