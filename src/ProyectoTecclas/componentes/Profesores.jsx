import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useMaterias } from "../useContext/CursosProvider";
import "../css/Profesor.css";
export const Profesores = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        items: [],
        jornadas: [],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "item",
  });
  //   sección  de useContext
  const { contextTodosHookLogica } = useMaterias();
  const {
    // hooks
    datosDeProfesor,
    // jornada
    datosDeJornada,
  } = contextTodosHookLogica;
  //   section de  eventos
  const handleProfeOnchange = () => {
    console.log("hola mundo ");
  };
  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="containerProfesor">
          {/* TENER EN CUENTA QUE AQUI CAMBIA EL ORDEN DEL FIEL ARRAY */}
          <div className="selectedProfesores">
            <Controller
              name={`item.${index}.profesor`}
              control={control}
              defaultValues=""
              render={({ field }) => (
                <Select
                  {...field}
                  style={{ width: "50%" }}
                  //  esto hace que lo seleccionado se vea en el input
                  value={field.corso}
                >
                  {datosDeProfesor.map((datos, cursoIndex) => (
                    <Select.Option
                      onClick={handleProfeOnchange}
                      key={datos.id}
                      value={datos.name}
                    >
                      {datos.name}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
            <Button onClick={() => remove(index)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
          <div className="selectedJornada">
            <Controller
              name={`test.${index}.jornada`}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  style={{ width: "50%" }}
                  value={field.jornada}
                >
                  {datosDeJornada.map((jornada, cursoIndex) => (
                    <Select.Option
                      onClick={handleProfeOnchange}
                      key={jornada.id}
                      value={jornada.name}
                    >
                      {jornada.name}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
            <Button onClick={() => remove(index)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
      >
        Seleccionar Profesores
      </Button>
    </div>
  );
};
