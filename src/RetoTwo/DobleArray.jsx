import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button, Input } from "antd";

const Proyecto = () => {
  const { control, handleSubmit } = useForm();
  const {
    fields: cursoFields,
    append: appendCurso,
    remove: removeCurso,
  } = useFieldArray({
    control,
    name: "cursos",
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {cursoFields.map((curso, cursoIndex) => (
        <div key={curso.id}>
          <h2>Curso {cursoIndex + 1}</h2>
          <Controller
            name={`cursos[${cursoIndex}].nombre`}
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Nombre del curso" />
            )}
          />
          {curso.cursosSeleccionados.map((estudiante, estudianteIndex) => (
            <div key={estudiante.id}>
              <Controller
                name={`cursos[${cursoIndex}].cursosSeleccionados[${estudianteIndex}].nombre`}
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nombre del estudiante" />
                )}
              />
            </div>
          ))}
          <Button
            type="button"
            onClick={() => appendCurso({ nombre: "", cursosSeleccionados: [] })}
          >
            Agregar Curso
          </Button>
        </div>
      ))}
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default Proyecto;
