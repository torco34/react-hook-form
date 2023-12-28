import { Form, Input, Button, Alert } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Container, Col } from "react-bootstrap";
import "../assets/css/creadentialform.css";
import { useNavigate } from "react-router-dom";
export const CredentialForm = ({}) => {
  const navigate = useNavigate();
  const [isRegistration, setIsRegistration] = useState(false);
  const handleOnRegistro = () => {
    setIsRegistration(!isRegistration);
  };
  const { control, handleSubmit } = useForm({});
  const { getValues } = control;

  const onSubmit = (data) => {
    if (isRegistration && data.confirmPassword !== data.password) {
      alert("La clave no coinciden");

      return;
    }
    console.log(data);
    localStorage.setItem("userData", JSON.stringify(data));
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
            <div className="input-field">
              <label>
                {isRegistration ? "Correo electrónico" : " Nombre de usuario"}
              </label>
              <Controller
                name="usernameOrEmail"
                control={control}
                value=""
                rules={{
                  required: "Este campo es obligatorio",
                }}
                render={({ field, fieldState }) => (
                  <div>
                    <Input
                      {...field}
                      placeholder={
                        isRegistration ? "Usuario" : "Correo electrónico"
                      }
                    />
                    {fieldState.invalid && (
                      <p className="error-message">
                        {fieldState.error?.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="input-field">
              <label>Contraseña:</label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                }}
                render={({ field, fieldState }) => (
                  <div>
                    <Input.Password {...field} placeholder="Contraseña" />
                    {fieldState.invalid && (
                      <p className="error-message">
                        {fieldState.error?.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {isRegistration && (
              <div className="input-field">
                <label>Confirmar Contraseña:</label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Este campo es obligatorio",
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <Input.Password
                        {...field}
                        placeholder="Confirmar Contraseña"
                      />
                      {fieldState.invalid && (
                        <p className="error-message">
                          {fieldState.error?.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            )}
            <Button onClick={handleOnRegistro}>
              {isRegistration ? "Iniciar Sesión" : "Registrarse"}
            </Button>
            <div className="submit-button ">
              <Button type="primary" htmlType="submit">
                {isRegistration ? "Registrarse" : "Iniciar Sesión"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <br></br>
    </>
  );
};
