import React from "react";
import { LoginForm } from "../components/LoginForm";
import { CredentialForm } from "../components/CredentialForm";
import { FieldsTeacher } from "../components/FieldsTeacher";

export const Home = () => {
  return (
    <div>
      <LoginForm />
      <CredentialForm />
      <FieldsTeacher/>
    </div>
  );
};
