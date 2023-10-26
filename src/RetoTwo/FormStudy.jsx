import React, { useState } from "react";
import { Button, Input, Form } from "antd";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Item from "antd/es/list/Item";

// registro estudia nombre apellidó correo eletronico
// cursos matematica ingles estadisticas
// cada curso tiene  selección  y curso seleccionado es eliminado de la array
//
const CURSOS = [
  "Ingles",
  "Informática",
  "Matemáticas",
  "Administración",
  "Estadísticas",
];

export const FormStudy = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const registrarse = watch("registrarse", false);
  const handleOptionSelect = (value, index) => {
    setSelectedOptions((prevSelected) => {
      return [...prevSelected, { index, value }];
    });
  };

  const handleOptionRemove = (index) => {
    setSelectedOptions((prevSelected) => {
      return prevSelected.filter((selected) => selected.index !== index);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Curso de nivelaciones</h2>

        <br></br>

        {fields.map((field, index) => (
          <div key={field.id}>
            <label>Nombre{index + 1}:</label>
            <Controller
              name={`items[${index}].namee`}
              control={control}
              defaultValue=""
              rules={{
                required: "Nombre es requerido",
                minLength: {
                  value: 2,
                  message: "Nombre debe tener al menos 2 caracteres",
                },
              }}
              render={({ field, fieldState }) => (
                <div>
                  <input {...field} />
                  {fieldState.invalid && (
                    <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />
            <label>Apellidos {index + 1}:</label>
            <Controller
              name={`items[${index}].apellido`}
              control={control}
              defaultValue=""
              rules={{
                required: "Este campo es requerido",
                minLength: {
                  value: 2,
                  message: "Nombre debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Nombre debe tener máximo 20 caracteres",
                },
              }}
              render={({ field, fieldState }) => (
                <div>
                  <input {...field} />
                  {fieldState.invalid && (
                    <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />
            <label>Correo Electrónico {index + 1}:</label>
            <Controller
              name={`items[${index}].address`}
              control={control}
              defaultValue=""
              rules={{
                required: "Este campo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Dirección de correo electrónico no válida",
                },
              }}
              render={({ field, fieldState }) => (
                <div>
                  <input {...field} />
                  {fieldState.invalid && (
                    <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />
            {selectedOptions.map((selected) => (
              <div key={selected.index}>
                {CURSOS[selected.index]}
                <button
                  type="button"
                  onClick={() => handleOptionRemove(selected.index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <Controller
              control={control}
              name={`items[${index}].name`}
              defaultValue={[]}
              render={({ field }) => (
                <select {...field} mode="multiple" style={{ width: "100%" }}>
                  {CURSOS.map((curso, index) => (
                    <option key={curso} value={index}>
                      {curso} {[index] }
                    </option>
                  ))}
                </select>
              )}
            />
            <button type="button" onClick={() => remove(index)}>
              Eliminar
            </button>
          </div>
        ))}
        <button onClick={() => append({})}>registrase</button>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
