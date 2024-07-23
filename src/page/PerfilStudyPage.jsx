import { useEffect } from "react";

import { Col, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";

import {
  ButtonReutilizar,
  DescriptionProject,
  EnrollmentCourse,
  ProfileInfo,
} from "../components";
import { Loading } from "../components/Loading";
import { useHookCourse } from "../useContext/HooksAllProvider";
import { EnrollCoursePage } from "./EnrollCoursePage";

import "../assets/css/perfil.css";

export const PerfilStudyPage = () => {
  const { contextAllHooks } = useHookCourse();
  const {
    showHome,
    setShowHome,
    show,
    setShow,
    loading,
    getDataInforma,
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
          <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="" >Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Perfil Estudiante</Breadcrumb.Item>
        </Breadcrumb>
            <div className="container  profile-container">
              <img
                src={"https://picsum.photos/200"}
                alt="Imagen de perfil"
                className="profile-image"
              />

              <div className="text-profile">
                Nombre estudiante:
                <p className="username text-uppercase">{state?.name}</p>
              </div>
            </div>
          </div>

          <div className="profile-content  ">
            {getDataInforma.length === 0 ? null : (
              <ButtonReutilizar
                text="Cursos seleccionados"
                onClick={handleFormulario}
              />
            )}

            <ButtonReutilizar
              text="Seleccionar cursos"
              onClick={handleHomePage}
            />

            <ButtonReutilizar
              text="Descripción del proyecto"
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
            {loading ? (
              // Muestra un mensaje de carga mientras se espera a que los datos se carguen
              <Loading />
            ) : (
              <>
                {getDataInforma.length === 0 ? null : (
                  <div>{showHome && <EnrollCoursePage />}</div>
                )}
                {show && <EnrollmentCourse />}

                {showText && <DescriptionProject />}
              </>
            )}
          </div>

          {/* <div className="body-perfil">
          <> {loading && "Corgando ..........."} </>
            {show ? <EnrollmentCourse /> : null}

            {getDataInforma.length === 0 ? null : (
              <div>{showHome ? <EnrollCoursePage /> : null}</div>
            )}

            {showText && <DescriptionProject />}
          </div> */}
        </Col>
        <Col xs={12} md={6}>
          <div className="body-perfil"></div>
        </Col>
      </Row>
    </div>
  );
};
