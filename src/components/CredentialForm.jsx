import { Form, Input, Button, Alert } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import "../assets/css/creadentialform.css";
import { useNavigate } from "react-router-dom";
export const CredentialForm = ({}) => {
  const navigate = useNavigate();
  const [isRegistration, setIsRegistration] = useState(false);
  const handleOnRegistro = () => {
    setIsRegistration(!isRegistration);
  };
  const { control, handleSubmit, getValues } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/dashboard", {
      replace: true,
      state: { logged: true, name: data.usernameOrEmail },
    });
  };
  return (
    <>
      <Row>
        <Col xs={12} md={12} className="  containerColumna ">
          <div className="form-wrapper rounded ">
            <Form
              className="credential-form p-5 rounded"
              onFinish={handleSubmit(onSubmit)}
            >
              <div className="input-field">
                <label>
                  {isRegistration ? "Nombre y apellido" : " Nombre de usuario"}
                </label>
                {isRegistration && (
                  <Controller
                    name="username"
                    control={control}
                    value=""
                    rules={{
                      required: "Este campo es obligatorio",
                    }}
                    render={({ field, fieldState }) => (
                      <div >
                        <Input
                          {...field}
                          placeholder={
                            isRegistration ? " Nombre y apellidos" : "Usuario "
                          }
                          className="input-fields"
                        />
                        {fieldState.invalid && (
                          <p className="error-message">
                            {fieldState.error?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                )}
                <label>{isRegistration ? "Correo electrónico" : null}</label>
                <Controller
                  name="usernameOrEmail"
                  control={control}
                  value=""
                  rules={{
                    required: "Este campo es obligatorio",
                  }}
                  render={({ field, fieldState }) => (
                    <div className="input-field">
                      <Input
                        {...field}
                        placeholder={
                          isRegistration ? " Correo electrónico" : "Usuario "
                        }
                        className="input-fields"
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
                    <div className="input-field">
                      <Input.Password
                        {...field}
                        placeholder="Contraseña"
                        className="input-fields"
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

              {isRegistration && (
                <div className="input-field">
                  <label>Confirmar Contraseña:</label>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Este campo es obligatorio",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Las contraseñas no coinciden",
                    }}
                    render={({ field, fieldState }) => (
                      <div className="input-field">
                        <Input.Password
                          {...field}
                          placeholder="Confirmar Contraseña"
                          className="input-fields"
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
                {isRegistration ? "Ingresar" : "Registrarse"}
              </Button>
              <div className="submit-button ">
                <Button type="primary" htmlType="submit">
                  {isRegistration ? "Registrarse" : "Ingresar"}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <br></br>
    </>
  );
};
