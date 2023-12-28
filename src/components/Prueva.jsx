import { Form, Input, Button } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

export const CredentialForm = ({}) => {
  const navigate = useNavigate();
  const [isRegistration, setIsRegistration] = useState(false);
  const { control, handleSubmit } = useForm({});
  const { getValues } = control;

  const onSubmit = (data) => {
    if (isRegistration && data.confirmPassword !== data.password) {
      alert("La clave no coinciden");
      return;
    }

    // Almacenar datos en localStorage
    localStorage.setItem("userData", JSON.stringify(data));

    // Redirigir al usuario a la página de dashboard
    navigate("/dashboard", {
      replace: true,
      state: { logged: true, name: data.usernameOrEmail },
    });
  };

  return (
    <>
      <br />
      <Row>
        <Col xs={12} md={6} className="border">
          hola mundo cruel
        </Col>
        <Col xs={12} md={4} className="border">
          <Form
            className="credential-form p-5   rounded"
            onFinish={handleSubmit(onSubmit)}
          >
            {/* ... (código existente) ... */}
          </Form>
        </Col>
      </Row>
      <br></br>
    </>
  );
};
