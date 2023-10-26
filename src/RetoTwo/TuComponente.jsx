import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button, Form, Input, Select } from "antd";
import Componente from "./Componente";
const CURSO = ["Matemáticas", "Ciencias", "Historia", "Literatura"];
function TuComponente() {
  const [courseOptions, setCourseOptions] = useState(CURSO);
  const [selected, setSelected] = useState("");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      courses: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const categorias = [
    "Matemáticas",
    "Física",
    "Química",
    "Biología",
    "Historia",
  ];
  const handleSelect = (selected) => {
    setCourseOptions((prev) => prev.filter((option) => option !== selected));
    console.log(selected);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(fields);
    moo;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Controller
            control={control}
            name={`items[${index}].curso`}
            render={({ field }) => (
              <div>
                <label>Seleccione carrera</label>
                <select
                  {...field}
                  onChange={(e) => handleSelect(index, e.target.value)}
                >
                  <option value="">ldh.x</option>
                  {courseOptions.map((curso, cursoIndex) => {
                    if (!fields.some((f) => f.curso === cursoIndex)) {
                    }
                    return (
                      <option key={cursoIndex} value={curso}>
                        {curso}
                      </option>
                    );
                    return null;
                  })}
                </select>
              </div>
            )}
          />
          <button type="button" onClick={() => remove(index)}>
            Eliminar
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          append({ curso: "" });
        }}
      >
        Agregar otro curso
      </button>
      <Componente />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default TuComponente;
