import React from "react";
import { CredentialForm } from "../components";
import { Row, Col } from "react-bootstrap";
export const DashboardPage = () => {
  return (
    <Row>
      <Col xs={12} md={12} className=" ">
        <CredentialForm />
      </Col>
    </Row>
  );
};
