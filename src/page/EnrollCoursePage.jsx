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
          <div className="border bg-light text-dark-emphasis text-center mb-3 border ">
            <h2> Mis cursos</h2>
          </div>
          <CursosPages />
          {/* <StudyProgress
            img={img0}
            titulo={Item.name}
            estado1="finalizado"
            estado2="enProgreso"
            estado3="restante"
          /> */}

          <StudyProgress
            img={img1}
            titulo="Learning Python for Data Sciences"
            estado1="finalizado"
            estado2="enProgreso"
            estado3="restante"
          />
          <StudyProgress
            img={img2}
            titulo="Computer Science for Python Programming"
            estado1="finalizado"
            estado2="enProgreso"
            estado3="restante"
          />
        </Col>
      </Row>
    </div>
  );
};
