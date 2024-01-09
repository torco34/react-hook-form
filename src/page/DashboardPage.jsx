import React from "react";
import { CredentialForm } from "../components";
import { Row, Col } from "react-bootstrap";
import { useHookCourse } from "../useContext/HooksAllProvider";
import { Loading } from "../components/Loading";

export const DashboardPage = () => {
  const { contextAllHooks } = useHookCourse();
  const {
    isRegistration,
    setIsRegistration,
    loading,
    setLoading,
    handleOnRegistro,
  } = contextAllHooks;
  return (
    <Row>
      <Col xs={12} md={12} className=" ">
        {loading ? <Loading /> : <CredentialForm />}
      </Col>
    </Row>
  );
};
