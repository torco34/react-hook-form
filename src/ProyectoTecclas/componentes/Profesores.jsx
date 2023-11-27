import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useMaterias } from "../useContext/CursosProvider";
import "../css/Profesor.css";
export const Profesores = () => {
  // sección de  fields array
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
  const {
    fields: fieldProfe,
    append: appendProfe,
    remove: removeProfe,
  } = useFieldArray({
    control,
    name: "profe",
  });
  const {
    fields: fieldCursos,
    append: appendCursos,
    remove: removeCursos,
  } = useFieldArray({
    control,
    name: "cursos",
  });
  const {
    fields: fieldJornada,
    append: appendJornada,
    remove: removeJornada,
  } = useFieldArray({
    control,
    name: "jornada",
  });
  //   SECCIÓN DE USECONTEX
  //
  const { contextTodosHookLogica } = useMaterias();
  const {
    // hooks
    // datos de profesor
    datosDeProfesor,
    // jornada
    datosDeJornada,
    // datos de los cursos
    cursosDisponibles,
  } = contextTodosHookLogica;
  //   section de  eventos
  // FUNCIONES DEL FORMULARIO
  //
  const handleProfeOnchange = () => {
    console.log("hola mundo ");
  };
  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="containerProfesor">
          {/* TENER EN CUENTA QUE AQUI CAMBIA EL ORDEN DEL FIEL ARRAY */}
          <div>
            {fieldProfe.map((fieldP, profeIndex) => (
              <div key={fieldP.id}>
                <Controller
                  name={`profe.${index}.profesor`}
                  control={control}
                  defaultValues=""
                  render={({ field }) => (
                    <div>
                      <p>Profesor:</p>
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
                    </div>
                  )}
                />
                <Button onClick={() => removeProfe(index)}>
                  <DeleteFilled
                    style={{ fontSize: "15px", color: "#b91010cc" }}
                  />
                </Button>

                <Button
                  type="button"
                  onClick={() => {
                    // append({ name: "" });
                    // appendJornada({ name: "" });
                    appendProfe({ name: "" });
                    // appendCursos({ name: "" });
                  }}
                >
                  mas
                </Button>
              </div>
            ))}
          </div>
          <div>
            {fieldCursos.map((fieldC, cursoIndex) => (
              <div>
                <Controller
                  name={`test.${index}.jornada`}
                  control={control}
                  render={({ field }) => (
                    <div style={{ width: "100%", display: "flex" }}>
                      <p>Cursos:</p>
                      <Select
                        {...field}
                        style={{ width: "50%" }}
                        value={field.curso}
                      >
                        {cursosDisponibles.map((curso, cursoIndex) => (
                          <Select.Option
                            onClick={handleProfeOnchange}
                            key={curso.id}
                            value={curso.name}
                          >
                            {curso.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </div>
                  )}
                />
                <Button onClick={() => removeCursos(index)}>
                  <DeleteFilled
                    style={{ fontSize: "15px", color: "#b91010cc" }}
                  />
                </Button>
              </div>
            ))}
          </div>
          <div>
            {fieldJornada.map((fieldJ, jornadaIndex) => (
              <div>
                <Controller
                  name={`test.${index}.jornada`}
                  control={control}
                  render={({ field }) => (
                    <div style={{ width: "100%", display: "flex" }}>
                      <p>Jornada:</p>
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
                    </div>
                  )}
                />
                <Button onClick={() => removeJornada(index)}>
                  <DeleteFilled
                    style={{ fontSize: "15px", color: "#b91010cc" }}
                  />
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => {
          append({ name: "" }), appendJornada({ name: "" });
          appendProfe({ name: "" });
          appendCursos({ name: "" });
        }}
      >
        Seleccionar Profesores
      </Button>
    </div>
  );
};
