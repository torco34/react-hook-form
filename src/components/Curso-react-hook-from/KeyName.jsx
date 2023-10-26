import { useForm, Controller } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
const CURSOS = [
    "Ingles",
    "Informática",
    "Matemáticas",
    "Administración",
    "Estadísticas",
  ];
export const KeyName = () => {
  const { control, register } = useForm({
    defaultValues: {
      options: [
        { id: 1, name: "Opción 1" },
        { id: 2, name: "Opción 2" },
      ],
    },
  });

  const { fields, remove } = useFieldArray({
    control,
    name: "options",
  });

  const onDelete = (id) => {
    const index = fields.findIndex((item) => item.id === id);
    remove(index);
  };

  return (
    <form>
      {fields.map((item) => (
        <>
          <Controller
            key={item.id}
            name={`options[${item.id}]`}
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value={item.name}>{item.name}</option>
              </select>
            )}
          />
          <button onClick={() => onDelete(item.id)}>Eliminar</button>{" "}
        </>
      ))}
    </form>
  );
}
