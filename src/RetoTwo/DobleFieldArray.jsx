import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
const cursos = [
  "Ingles",
  "Informática",
  "Matemáticas",
  "Administración",
  "Estadísticas",
];
export const Proyecto = () => {
  const [selectedCursos, setSelectedCursos] = useState([]);
  const [cursosDisponibles, setCursosDisponibles] = useState(cursos);

  const { control, handleSubmit, register, reset, setValue } = useForm({
    defaultValues: {
      items: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control,
    name: "items2",
  });
  const handleSelectChange = (e, index) => {
    // a qui selected capsula el curso seleccionado
    const selected = e.target.value;
    append2({
      nombre: selected,
    });
    console.log("selected", selected);

    // setValue(`items[${index}].curso`, selected);
    // a qui push o agregamos a la array  selectedCursos
    setSelectedCursos([...selectedCursos, selected]);
    // a qui creamos una nueva array sin el cuso seleccionado
    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso !== selected
    );
    // a qui actualizamos el estado con la nueva array
    setCursosDisponibles(cursosRestantes);
  };

  // const isCursoSelected = (curso) => selectedCursos.includes(curso);
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  console.log(fields2);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre </label>
          <Controller
            name={"name"}
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
          <label>Apellidos</label>
          <Controller
            name={`items.apellido`}
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
          <label>Correo</label>
          <Controller
            name={`address`}
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
        </div>
        {fields.map((item, index) => (
          <Controller
            key={item}
            name={`items[${index}].cursosDisponibles`}
            control={control}
            defaultValues=""
            rules={{
              required: "Nombre es requerido",
              minLength: {
                value: 2,
                message: "Nombre debe tener al menos 2 caracteres",
              },
            }}
            render={({ field }) => (
              <div key={field}>
                <select
                  {...field}
                  {...register(`items[${index}].cursosDisponibles`)}
                  value={field.cursosDisponibles}
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    handleSelectChange(e, index);
                  }}
                >
                  <option value="">Selecciona</option>
                  {cursosDisponibles.map((curso, index) => (
                    <>
                      {/* si le coloco el id se ve los */}

                      <option key={curso} value={curso}>
                        {curso}
                      </option>
                    </>
                  ))}
                </select>

                <div>
                  {selectedCursos.map((curso, index) => (
                    <span key={curso} className="selected-curso">
                      <h3>
                        {curso}
                        <button
                          onClick={() => {
                            const cursoEliminado = selectedCursos[index];
                            const cursoFil = selectedCursos.filter(
                              (c, i) => i !== index
                            );

                            setSelectedCursos(cursoFil);
                            setCursosDisponibles([
                              ...cursosDisponibles,
                              cursoEliminado,
                            ]);
                          }}
                        >
                          x
                        </button>
                      </h3>
                    </span>
                  ))}

                  <button
                    type="button"
                    onClick={(index) => {
                      const cursoEliminado = selectedCursos[index];
                      setCursosDisponibles(cursoEliminado);
                      setCursosDisponibles([
                        ...cursosDisponibles,
                        cursoEliminado,
                      ]);
                      remove(index);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          />
        ))}

        {selectedCursos.length === 5 ? (
          "No hay mas carreras"
        ) : (
          <button
            type="button"
            onClick={() => {
              append({ items: "" });
            }}
          >
            Estudiante
          </button>
        )}
        {/* {fields2.map((item, index) => (
          <>{item.nombre}</>
        ))} */}
        <input type="submit" />
      </form>
    </div>
  );
};
