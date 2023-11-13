import React, { useState } from "react";
let childRender = "torco";
import { useForm, useWatch } from "react-hook-form";

export const FormStudy = () => {
  const [isFieldsBlocked, setFieldsBlocked] = useState(false);

  const { register, control } = useForm();
  const firstName = useWatch({ name: "firstName", control });
  const lastName = useWatch({ name: "lastName", control });
  const title = useWatch({ name: "title", control });
  // Ejemplo de uso de setValue para actualizar el valor de un campo llamado "nombre"
  const handleTitleChange = (e) => {
    const selectedTitle = e.target.value;

    // Lógica para decidir si bloquear o desbloquear los campos
    setFieldsBlocked(selectedTitle === "Dr.");
  };
  return (
    <form>
      <select {...register("title")} onChange={handleTitleChange}>
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Dr.">Dr.</option>
      </select>
     
      <input
        {...register("firstName")}
        placeholder="First Name"
        disabled={isFieldsBlocked}
      />
      <input
        {...register("lastName")}
        placeholder="Last Name"
        disabled={isFieldsBlocked}
      />
      <p>Full Name: {`${firstName} ${title}  ${lastName}`}</p>
    </form>
  );
};
