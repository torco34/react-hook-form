import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

export const PonerleHoras = () => {
  const { control, handleSubmit } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "carreras",
  });

  const carreras = [
    "Carrera 1",
    "Carrera 2",
    "Carrera 3",
    "Carrera 4",
    "Carrera 5",
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Seleccione una carrera y una hora:</h2>
      <ul>
        {fields.map((field, index) => (
          <li key={field.id}>
            Carrera:
            <Controller
              name={`carreras[${index}].carrera`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field}>
                  {carreras.map((carrera, i) => (
                    <option
                      key={i}
                      value={carrera}
                      disabled={fields.some(
                        (f) => f.carrera === carrera && f.id !== field.id
                      )}
                    >
                      {carrera}
                    </option>
                  ))}
                </select>
              )}
            />
            Hora:
            <Controller
              name={`carreras[${index}].hora`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  min="1"
                  max="24"
                  placeholder="Ingrese la hora"
                />
              )}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => append({})}>Agregar</button>
      <button type="submit">Enviar</button>
    </form>
  );
};
