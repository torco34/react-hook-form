import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function Borrador() {
  const { register, handleSubmit, control, reset } = useForm();
  const { fields, append } = useFieldArray({
    control,
    name: "items"
  });

  const [selectedValue, setSelectedValue] = useState(null);

  const addNewField = () => {
    // Al agregar una nueva entrada en FieldArray, resetea el valor seleccionado.
    setSelectedValue(null);
    append({ selection: "" });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <select
            {...register(`items[${index}].selection`)}
            value={field.selection}
            onChange={(e) => {
              field.selection = e.target.value;
              setSelectedValue(e.target.value);
            }}
          >
            <option value="">Selecciona</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
          </select>
          {/* {selectedValue && <span>{selectedValue}</span>} */}
        </div>
      ))}
      <button type="button" onClick={addNewField}>
        Agregar Campo
      </button>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Borrador;
