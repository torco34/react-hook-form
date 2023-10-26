import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "react-select";
import { DeleteFilled } from "@ant-design/icons";
export const Selector = () => {
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
  const maxSelectors = cursos.length;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2></h2>
      {fields.map((field, index) => (
        <div key={field.id} style={{ display: "flex", padding: "30px"}}>
          <Controller
            control={control}
            name={`items[${index}].selectedOption`}
            render={({ field }) => (
              <Select
                {...field}
                options={cursos.filter((curso) => !selectedOptions.includes(curso.value) || field.value.includes(curso.value))}
               
                onChange={(selected) => {field.onChange(selected); 
                  setSelectedOptions((prev) => [...prev, ...selected.map((option) => option.value), ]);
                }}
              />
            )}
          />
          <button type="button" onClick={() => remove(index)}>
            <DeleteFilled style={{ fontSize: "20px", color: "#f12b08cc" }} />
          </button>
        </div>
      ))}
      {fields.length < maxSelectors && (
        <button
          type="button"
          onClick={() => {
            append({ selectedOption: [] });
          }}
        >
          Agregar cursos disponibles
        </button>
      )}
      {fields.length >= maxSelectors &&
        cursos.length === selectedOptions.length && (
          <p>No hay más cursos disponibles.</p>
        )}
      <button type="submit">Enviar</button>
    </form>
  );
};
