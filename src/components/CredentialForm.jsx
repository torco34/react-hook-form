import { Form, Input, Button } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Container, Col } from "react-bootstrap";
import "../assets/css/creadentialform.css";
export const CredentialForm = ({}) => {
  const [isRegistration, setIsRegistration] = useState(false);
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // reset();
    // setSelectedCursos([""]);
  };
  return (
    <>
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={5}>
          <Form
            className="credential-form p-5"
            onFinish={handleSubmit(onSubmit)}
          >
            <div className="input-field">
              <label>
                {isRegistration ? "Nombre de usuario" : "Correo electrónico"}
              </label>
              <Controller
                name="usernameOrEmail"
                control={control}
                defaultValue=""
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
                    validate: (value) =>
                      value === control.getValues("password")
                        ? undefined
                        : "Las contraseñas no coinciden",
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
            {isRegistration ? "Registrarse" : "Iniciar Sesión"}
            <div className="submit-button">
              <Button type="primary" htmlType="submit">
                enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};
