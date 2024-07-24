
import { Col, Row } from "react-bootstrap";

import { CredentialForm } from "../components";
import { Loading } from "../components/Loading";
import { useHookCourse } from "../useContext/HooksAllProvider";

export const DashboardPage = () => {
  const { contextAllHooks } = useHookCourse();
  const {
    // isRegistration,
    // setIsRegistration,
    loading,
    login
    // setLoading,
    // handleOnRegistro,
  } = contextAllHooks;
  return (
    <Row className="">
      <Col xs={12} md={12} className="bg-dark ">
        {loading ? <Loading /> : <CredentialForm />}
      </Col>
    </Row>
  );
};
