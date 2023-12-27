import React, { useState } from "react";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { useForm, Controller } from "react-hook-form";
import "../assets/css/loginForm.css";
export const LoginForm = () => {
  const handleInicioSesion = () => {};
  const handleRegistro = () => {
    alert("hola");
  };
  return (
    <div className="">
      <Button onClick={handleInicioSesion}>Iniciar sesión</Button>
      <Button onClick={handleRegistro}>Registrarse</Button>
    </div>
  );
};
