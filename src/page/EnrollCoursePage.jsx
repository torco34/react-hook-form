import { Row, Col } from "react-bootstrap";
import "../assets/css/enrollCourserPage.css";

import img0 from "../assets/img/ingle.jpeg";
import img1 from "../assets/img/int.jpeg";
import img2 from "../assets/img/computer.jpeg";
import { StudyProgress } from "../components/StudyProgress";
import Item from "antd/es/list/Item";
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
};
