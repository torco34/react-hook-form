import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

export const Profesor = () => {
  const categorias = ["JavaScript", "Python", "Java"];
  const articulosPorCategoria = {
    JavaScript: ["React.js", "Node", "Angular"],
    Python: ["Programación orientado a objetos"],
    Java: ["Desarrollo de videojuegos.", "Refresco", "Jugo"],
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = useForm();

  const {} =
    useFieldArray <
    FormData >
    {
      control,
      name: "items",
    };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div>
      <Controller
        name="items"
        control={control}
        render={({ field }) => (
          <select {...field}>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        )}
      />
      <Controller
        name="items"
        control={control}
        render={({ field }) => (
          <select {...field}>
            {Object.keys(articulosPorCategoria).map((categoria) => (
              <>
                <option key={categoria} value={categoria}>
                  {articulosPorCategoria[categoria].map((articulo) => (
                    <p>{articulo}</p>
                  ))}
                </option>
              </>
            ))}
          </select>
        )}
      />
    </div>
  );
};
