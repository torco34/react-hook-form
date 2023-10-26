import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "react-select";

function Componente() {
  const { control, handleSubmit, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const cursos = [
    { value: "Ingles", label: "Ingles" },
    { value: "Informática", label: "Informática" },
    { value: "Matemáticas", label: "Matemáticas" },
    { value: "Administración", label: "Administración" },
    { value: "Estadísticas", label: "Estadísticas" },
  ];
  const maxSelectors = 4;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Selecciona opciones:</h2>
      {}
    </form>
  );
}

export default Componente;
