import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useMaterias } from "../useContext/CursosProvider";
import "../css/Profesor.css";
import { useEffect, useState } from "react";

export const Profesores2 = () => {
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

  const [historia, setHistoria] = useState([]);
  const [seleccionadosName, setSeleccionadosName] = useState([]);
  const [seleccionNombre, setSeleccionNombre] = useState("");
  const handleProfeOnchange = (value) => {
    const index = seleccionadosName.indexOf(value);
    console.log(index);
    if (index === -1) {
      // Si el nombre no está en la lista, agrégalo
      setSeleccionadosName([...seleccionadosName, value]);
      console.log(seleccionadosName);
    } else {
      console.log("hola mundo");
      setSeleccionNombre(value);
      const nuevaArray = datosDeProfesor.filter((item) => item.name !== value);
      setDatosDeProfesor(nuevaArray);
    }
  };
  const handleJornadaOnchange = (value) => {
    console.log(value);
    console.log(seleccionNombre);
    if (seleccionNombre === "jose" && value === "mañana") {
      setSeleccionTurno("tarde");
    }
  };

  const handleCursosOnchange = () => {};
  // const handleClick = (datos) => {
  //   // Realiza la acción que necesitas con el nombre actual
  //   console.log(`Clic ${datos}`);
  //   const arrayCursos = cursoDeProfesor.filter((items) => items !== datos);
  //   setCursoDeProfesor(arrayCursos);

  //   if (arrayCursos.length === 0) {
  //     console.log("hola mundo");
  //     appendProfe({ name: "" });
  //   }
  //   console.log(nombreProfe, "dxffffffffffff");
  //   // Actualiza el estado con el nombre actual
  //   setNombreProfe(datos);
  // };
  // const handleClickCurso = (curso) => {
  //   // Realiza la acción que necesitas con el nombre actual
  //   console.log(`Clic ${curso}`);
  //   console.log(nombreCursos, "nombreCursos");
  //   // Actualiza el estado con el nombre actual
  //   setNombreCursos(curso);
  //   // appendCursos({ name: "" });
  // };
  // const handleClickJornada = (jornada) => {
  //   // Realiza la acción que necesitas con el nombre actual
  //   console.log(`Clic ${jornada}`);
  //   console.log(nombreJornada, "dxffffffffffff");
  //   // Actualiza el estado con el nombre actual
  //   setNombreJornada([...nombreJornada, jornada]);
  // };

  return (
    <div className="container">
      {fields.map((field, index) => (
        <div key={field.id} className="containerProfesor">
          {/* TENER EN CUENTA QUE AQUI CAMBIA EL ORDEN DEL FIEL ARRAY */}
          <div>
            <div className="div-fil-spaces">
              <div className="profesores">
                <p className="profesor">Profesor:</p>
              </div>
              <Controller
                name={`profe.${index}.profesor`}
                control={control}
                defaultValues=""
                render={({ field }) => (
                  <div style={{ width: "80%", display: "flex" }}>
                    <Select
                      {...field}
                      style={{ width: "60%" }}
                      //  esto hace que lo seleccionado se vea en el input
                      value={field.corso}
                      onChange={(value) => {
                        field.onChange(value);
                        handleProfeOnchange(value, index);
                      }}
                    >
                      {datosDeProfesor.map((datos, datosIndex) => (
                        <Select.Option
                          key={datosIndex}
                          value={datos.name}
                          className="selectProfe"

                          //   onMouseDown={() => handleClick(datos.name)}
                        >
                          {datos.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>
          </div>
          <div>
            <div className="div-fil-spaces">
              <div className="profesores">
                <p>Cursos:</p>
              </div>
              <Controller
                name={`test.${index}.jornada`}
                control={control}
                render={({ field }) => (
                  <div style={{ width: "80%", display: "flex" }}>
                    <Select
                      {...field}
                      style={{ width: "60%" }}
                      value={field.curso}
                      onChange={(value) => {
                        field.onChange(value);
                        handleCursosOnchange(value, index);
                      }}
                    >
                      {cursoDeProfesor.map((curso, cursoIndex) => (
                        <Select.Option
                          onClick={handleProfeOnchange}
                          key={curso}
                          value={curso.name}
                          //   onMouseDown={() => handleClickCurso(curso)}
                        >
                          {curso.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>
          </div>
          <div>
            <div className="div-fil-spaces">
              <div className="profesores">
                <p>Jornada:</p>
              </div>
              <Controller
                name={`test.${index}.jornada`}
                control={control}
                render={({ field }) => (
                  <div style={{ width: "80%", display: "flex" }}>
                    <Select
                      {...field}
                      style={{ width: "60%" }}
                      value={field.jornada}
                      onChange={(value) => {
                        field.onChange(value);
                        handleJornadaOnchange(value, index);
                      }}
                    >
                      {datosDeJornada.map((jornada, cursoIndex) => (
                        <Select.Option
                          key={jornada.id}
                          value={jornada.name}
                          //   onMouseDown={() => handleClickJornada(jornada.name)}
                        >
                          {jornada.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>
          </div>
          <div className="button">
            <Button
              onClick={() => {
                remove(index);
              }}
            >
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        </div>
      ))}

      <div className="selectedProfe">
        <Button
          onClick={(value) => {
            append({ name: "" });
            setDatosDeProfesor(datosDeProfesor);
          }}
        >
          Seleccionar Profesores
        </Button>
      </div>
    </div>
  );
};
