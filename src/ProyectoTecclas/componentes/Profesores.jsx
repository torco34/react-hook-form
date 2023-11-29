import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useMaterias } from "../useContext/CursosProvider";
import "../css/Profesor.css";
import { useEffect, useState } from "react";

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
    // name the teacher
    datosDeProfesor,
    setDatosDeProfesor,
    // course the teacher
    cursoDeProfesor,
    setCursoDeProfesor,
    //
    cantidadNombresPorCurso,
    setCantidadNombresPorCurso,
    // jornada
    datosDeJornada,

    // datos de los cursos
    cursosDisponibles,
    copiaSelectedCursos,
  } = contextTodosHookLogica;
  //   section de  eventos
  // FUNCIONES DEL FORMULARIO
  //
  const handleProfeOnchange = (value) => {
    const nuevaArray = datosDeProfesor.filter((item) => item.name !== value);
    console.log("hola mundo ", nuevaArray);
    setDatosDeProfesor(nuevaArray);
    console.log(datosDeProfesor, "datos de profeso hook");
    // appendProfe({ name: "" });
  };
  const [nombreProfe, setNombreProfe] = useState(null);
  const [nombreCursos, setNombreCursos] = useState(null);
  const [nombreJornada, setNombreJornada] = useState([]);
  const handleClick = (datos) => {
    // Realiza la acción que necesitas con el nombre actual
    console.log(`Clic ${datos}`);
    console.log(nombreProfe, "dxffffffffffff");
    // Actualiza el estado con el nombre actual
    setNombreProfe(datos);
    appendProfe({ name: "" });
  };
  const handleClickCurso = (curso) => {
    // Realiza la acción que necesitas con el nombre actual
    console.log(`Clic ${curso}`);
    console.log(nombreCursos, "nombreCursos");
    // Actualiza el estado con el nombre actual
    setNombreCursos(curso);
    appendCursos({ name: "" });
  };
  const handleClickJornada = (jornada) => {
    // Realiza la acción que necesitas con el nombre actual
    console.log(`Clic ${jornada}`);
    console.log(nombreJornada, "dxffffffffffff");
    // Actualiza el estado con el nombre actual
    setNombreJornada([...nombreJornada, jornada]);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="containerProfesor">
          {/* TENER EN CUENTA QUE AQUI CAMBIA EL ORDEN DEL FIEL ARRAY */}
          <div>
            {fieldProfe.map((fieldP, index) => (
              <div key={fieldP.id} className="div-fil-profe">
                <Controller
                  name={`profe.${index}.profesor`}
                  control={control}
                  defaultValues=""
                  render={({ field }) => (
                    <div style={{ width: "100%", display: "flex" }}>
                      <p>Profesor:</p>
                      <Select
                        {...field}
                        style={{ width: "100%" }}
                        //  esto hace que lo seleccionado se vea en el input
                        value={field.corso}
                        onChange={(value) => {
                          field.onChange(value);
                          handleProfeOnchange(value, index);
                        }}
                      >
                        {datosDeProfesor.map((datos, cursoIndex) => (
                          <Select.Option
                            key={cursoIndex}
                            value={datos.name}
                            // onClick={() => handleClick(datos.name)}
                            onMouseDown={() => handleClick(datos.name)}
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

                {/* <Button
                  type="button"
                  onClick={() => {
                    // append({ name: "" });
                    // appendJornada({ name: "" });
                    appendProfe({ name: "" });
                    // appendCursos({ name: "" });
                  }}
                >
                  agregar mas
                </Button> */}
              </div>
            ))}
          </div>
          <div>
            {fieldCursos.map((fieldC, cursoIndex) => (
              <div key={fieldC.id} className="div-fil-cursos">
                <Controller
                  name={`test.${index}.jornada`}
                  control={control}
                  render={({ field }) => (
                    <div style={{ width: "100%", display: "flex" }}>
                      <p>Cursos:</p>
                      <Select
                        {...field}
                        style={{ width: "100%" }}
                        value={field.curso}
                      >
                        {cursoDeProfesor.map((curso, cursoIndex) => (
                          <Select.Option
                            onClick={handleProfeOnchange}
                            key={curso}
                            value={curso.name}
                            onMouseDown={() => handleClickCurso(curso)}
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
              <div key={fieldJ.id} className="div-fil-jornada">
                <Controller
                  name={`test.${index}.jornada`}
                  control={control}
                  render={({ field }) => (
                    <div style={{ width: "100%", display: "flex" }}>
                      <p>Jornada:</p>
                      <Select
                        {...field}
                        style={{ width: "100%" }}
                        value={field.jornada}
                      >
                        {datosDeJornada.map((jornada, cursoIndex) => (
                          <Select.Option
                            key={jornada.id}
                            value={jornada.name}
                            onMouseDown={() => handleClickJornada(jornada.name)}
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
          <div>
            <Button
              onClick={() => {
                remove(index);
                removeJornada(index);
                removeProfe(index);
                removeCursos(index);
              }}
            >
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        </div>
      ))}
      <div className=" profesores">
        <p>{nombreProfe}</p>
        <p>{nombreCursos}</p>
        <p>{nombreJornada}</p>
      </div>
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
