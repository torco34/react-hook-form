import { Col, Row } from "react-bootstrap";

import "../assets/css/enrollCourserPage.css";
import { CursosPages } from "./CursosPages";

export const EnrollCoursePage = () => {
  return (
    <div className="body-page">
      <Row>
        <Col xs lg="12">
          <div className="rounded bg-light p-3 text-dark-emphasis text-center mb-3 show ">
            <h4> Mis cursos seleccionados</h4>
          </div>
          <CursosPages />
        </Col>
      </Row>
    </div>
  );
}