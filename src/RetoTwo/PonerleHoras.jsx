import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useState } from "react";

export const PonerleHoras = () => {
  
  const { control, handleSubmit, register } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materias",
  });
  const handleOnclick = (data) => {
    console.log(data.materias);
   
  };
  const onSubmit = (data) => {
    console.log(data.materias);
    // Aquí puedes hacer lo que necesites con las selecciones
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Controller
            name={`materias[${index}].materia`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                ref={register()}
                placeholder="Selecciona una materia"
              >
                <option value="">Selecciona una materia</option>
                <option value="Matemáticas">Matemáticas</option>
                <option value="Estadísticas">Estadísticas</option>
                <option value="Biología">Biología</option>
                {/* Agrega más opciones de materias aquí */}
              </select>
            )}
          />
          <Controller
            name={`materias[${index}].horas`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="number"
                ref={register()}
                placeholder="Horas"
              />
            )}
          />
          <button onClick={handleOnclick({ materia: "", horas: "" })}>
           {guardar? "se guardo hora": "guardar" }
          </button>
          <button type="button" onClick={() => remove(index)}>
            Eliminar
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ materia: "", horas: "" })}>
        Agregar Materia
      </button>
      <button type="submit">Guardar Materias</button>
    </form>
  );
};
