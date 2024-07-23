

import { Button } from "antd";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/img/log.png";

import "../../assets/css/header.css";

export const Header = () => {
  const { state } = useLocation();
  const navigation = useNavigate();
  const onLogout = () => {
    navigation("/login", { replace: true });
  };

  return (
    <>
      <Navbar className="header ">
        <Navbar.Brand className="  brand">
          <Container>
            <Row>
              <Col
                xs
                lg="4"
                className="d-flex align-item-center justify-content-center"
              >
                <div className="logo  ">
                  <Link to="/">
                    <img
                      alt=""
                      src={logo}
                      width="50"
                      height="50"
                      className="rounded-circle"
                    />{" "}
                    <h4>Inscripción de estudiante</h4>
                  </Link>
                </div>
              </Col>
              <Col sm lg="8" className="d-flex ">
              <div className="login borde">
  {state?.logged ? (
    <div className="user ">
      <BsFillPersonFill
        style={{
          fontSize: "30px",
          color: "#fff",
        }}
      />
      <span>{state?.name}</span>
      <Button onClick={onLogout}>Cerrar sesión</Button>
    </div>
  ) : (
    <div className="user ">
      <Link to="login">
        <Button>Iniciar sesión</Button>
      </Link>
    </div>
  )}
</div>
              </Col>
            </Row>
          </Container>
        </Navbar.Brand>
      </Navbar>
      {/* <Outlet /> */}
    </>
  );
};
