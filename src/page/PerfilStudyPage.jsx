import perfil from "../assets/img/icon.png";
import "../assets/css/perfil.css";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { EnrollCoursePage } from "./EnrollCoursePage";
import { ButtonReutilizar, EnrollmentCourse, ProfileInfo } from "../components";
import { useHookCourse } from "../useContext/HooksAllProvider";
import { useContext, useEffect } from "react";
import { CarouselText } from "../components/CarouselText";

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
                <p className="username text-uppercase">{state?.name}</p>
              </div>
            </div>
          </div>

          <div className="profile-content d-flex  gap-3  ">
            <ButtonReutilizar
              text="Inscripción cursos"
              onClick={handleFormulario}
            />
            <ButtonReutilizar
              text="Cursos en procesos"
              onClick={handleHomePage}
            />

            <ButtonReutilizar
              text="inscricion de projecto"
              onClick={handleShowText}
            />
          </div>

          <ProfileInfo
            name={state?.name}
            location="Colombia"
            education="Formación media"
          />
        </Col>

        <Col xs={12} md={6}>
          <div className="body-perfil">
            {show ? <EnrollmentCourse /> : null}
            {showHome ? <EnrollCoursePage /> : null}
            {showText && (
              <div className="bg-light border p-5 mb-5">
                <CarouselText
                  textH1="React Hook Form"
                  textP="En mi aplicación, implementé React Hook Form para gestionar
                  formularios, haciendo uso especialmente de FieldArray para
                  manejar campos dinámicos. Además, incorporé validaciones en
                  tiempo real para mejorar la experiencia del usuario."
                />

                <CarouselText
                  textH1=" React Router "
                  textP=" Para la navegación, utilicé React Router con rutas anidadas
                  para organizar la estructura de la aplicación de manera
                  eficiente. Además, implementé medidas de seguridad mediante
                  rutas protegidas, asegurando que ciertas secciones solo sean
                  accesibles para usuarios autorizados."
                  
                />
                <CarouselText
                  textP=" 
                   En resumen, construí una aplicación que aprovecha las
                  capacidades de React Hook Form para la gestión de formularios
                  dinámicos, integra validaciones en tiempo real y utiliza React
                  Router con rutas anidadas y protegidas para una navegación
                  segura y organizada."
                />
              </div>
            )}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="body-perfil"></div>
        </Col>
      </Row>
    </div>
  );
};
