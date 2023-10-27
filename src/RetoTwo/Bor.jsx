import React from "react";
import { useForm, Controller } from "react-hook-form";

const Bor = () => {
  const { control, handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index}>
            <Controller
              name={`items[${index}]`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input {...field} placeholder={`Item ${index + 1}`} />
              )}
            />
          </li>
        ))}
      </ul>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Bor;
