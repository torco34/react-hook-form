import { Row, Col } from "react-bootstrap";
import "../assets/css/enrollCourserPage.css";
import { EnrollmentCourse } from "../components";

export const EnrollCoursePage = () => {
  return (
    <div className="body-page">
      {/* <Container> */}
      <Row>
        <Col xs lg="7">
          <div>esta una materia nueva</div>
        </Col>

        <Col>
          <EnrollmentCourse />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};
