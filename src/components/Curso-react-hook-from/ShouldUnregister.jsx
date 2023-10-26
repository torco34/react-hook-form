import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
export const ShouldUnregister = () => {
  const [showAge, setShowAge] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>shouldUnregister</h2>
        <p>
          La función shouldUnregister en React Hook Form se utiliza para indicar
          si un campo debe ser desregistrado (unregister) o no cuando el
          componente se desmonta. Esto es útil para limpiar campos que no
          queremos persistir entre montajes del componente.
        </p>
        <input {...register("firstName")} placeholder="pir" />

        {showAge && (
          <input
            {...register("age", { shouldUnregister: true })}
            placeholder="nombre"
          />
        )}

        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>

        <input type="submit" />
      </form>
    </div>
  );
};
