import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
export const Validacion = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items", // Nombre del campo en tu formulario
  });
  const onSubmit = (data) => {
    console.log(data);
    // Realiza acciones cuando el formulario se envía
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <Controller
              name={`items[${index}].name`}
              control={control}
              defaultValue=""
              rules={{ required: "Este campo es obligatorio" }}
              render={({ field }) => <input {...field} />}
            />
            <button type="button" onClick={() => remove(index)}>
              Eliminar
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ name: "" })}>
          Agregar elemento
        </button>
        <input type="submit" value="Enviar" />
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <label>Correo Electrónico #{index + 1}:</label>
            <Controller
              name={`emails[${index}].address`}
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
            <button type="button" onClick={() => remove(index)}>
              Eliminar
            </button>
          </div>
        ))}
        <h2>Productos</h2>
        {fields.map((product, index) => (
          <div key={product.id}>
            <input
              type="text"
              {...register(`products.${index}.name`)}
              defaultValue={product.name} // Para cargar datos existentes
            />
            <input
              type="number"
              {...register(`products.${index}.price`)}
              defaultValue={product.price} // Para cargar datos existentes
            />
            <button type="button" onClick={() => remove(index)}>
              Eliminar Producto
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ name: "", price: 0 })}>
          Agregar Producto
        </button>
        <button type="button" onClick={() => append({ address: "" })}>
          Agregar Correo Electrónico
        </button>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
