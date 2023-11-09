import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function FormStudy() {
  const { control, handleSubmit, watch, setValue, register } = useForm();
  const selectedValue = watch('selectedItem');

  const items = [
    { name: 'Item 1', value: 'Value 1' },
    { name: 'Item 2', value: 'Value 2' },
    // Agrega más elementos si es necesario
  ];

  const onSubmit = (data) => {
    // Maneja la acción de envío del formulario aquí
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {items.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              value={index}
              {...register('selectedItem')}
            />
            {item.name}
          </label>
        ))}
      </div>

      {selectedValue !== undefined && (
        <div>
          <label>Item Name:</label>
          <Controller
            name={`items[${selectedValue}].name`}
            control={control}
            render={({ field }) => <input {...field} />}
          />
          <label>Item Value:</label>
          <Controller
            name={`items[${selectedValue}].value`}
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormStudy;