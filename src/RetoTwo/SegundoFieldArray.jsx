import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
export const SegundoFieldArray = ({}) => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        items: [],
        cursosSeleccionados: [],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <ul>
          {fields.map((item, index) => (
            <>
              <li key={item.id}>
                <input {...register(`test.${index}.firstName`)} />
                <Controller
                  render={({ field }) => <input {...field} />}
                  name={`test.${index}.lastName`}
                  control={control}
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            </>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => append({ firstName: "bill", lastName: "luo" })}
        >
          append
        </button>
        <input type="submit" />
      </form>
    </div>
  );
};
