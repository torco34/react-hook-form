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
    setDatosDeJornada,
    // datos de los cursos
    cursosDisponibles,
    copiaSelectedCursos,
    // datos nombre profesor
    setNombreProfesor,
    nombreProfesor,
  } = contextTodosHookLogica;
  //   section de  eventos
  // FUNCIONES DEL FORMULARIO
  //

  const [filterJuan, setFilterJuan] = useState([]);
  const [filterJose, setFilterJose] = useState([]);
  const [filterSergio, setFilterSergio] = useState([]);
  const [filterAgustin, setFilterAgustin] = useState([]);
  const [filterEsteban, setFilterEsteban] = useState([]);
  const [seleccionadosName, setSeleccionadosName] = useState([]);
  const [seleccionaNombre, setSeleccionaNombre] = useState("");

  const handleProfeOnchange = (value) => {
    const index = seleccionadosName.indexOf(value);
    setSeleccionaNombre(value);

    if (index === -1) {
      setSeleccionadosName([...seleccionadosName, value]);
    } else {
      setSeleccionadosName(value);
      const nuevaArray = nombreProfesor.filter((item) => item.name !== value);
      setNombreProfesor(nuevaArray);
      setSeleccionadosName([value]); // Cambiado para que sea un array con un solo elemento
      setDatosDeProfesor(nuevaArray);
    }
    setDatosDeJornada(datosDeJornada);
  };

  const handleJornadaOnchange = (value) => {
    console.log(value, seleccionaNombre);
    console.log(value.length, "tor");
    console.log(nombreProfesor.length, "n");
    console.log(datosDeJornada.length);
    console.log(cursoDeProfesor.length, "curso p");
    if (
      seleccionaNombre === "Juan" ||
      seleccionaNombre === "Jose" ||
      seleccionaNombre === "Agustin" ||
      seleccionaNombre === "Sergio" ||
      seleccionaNombre === "Esteban"
    ) {
      console.log("hola.......tttt.", seleccionaNombre);
      const nuevosCurso = datosDeJornada.filter((item) => item.name !== value);
      setDatosDeJornada(nuevosCurso);
      console.log(nuevosCurso, "filtro");
      console.log(seleccionaNombre, "nombre");
      // if (value.length >= 6) {
      //   console.log(value, "torcoroma");
      //   // setDatosDeJornada([...datosDeJornada, value]);
      // }
    }
    if (value === "Tarde") {
      console.log("hola........juan");
    }
    if (seleccionaNombre === "Jose") {
      console.log("hola.......tttt.", seleccionaNombre);
      const nuevosCurso = datosDeJornada.filter((item) => item.name !== value);
      setDatosDeJornada(nuevosCurso);
      console.log(nuevosCurso);
    }
  };

  const handleCursosOnchange = (value) => {
    const nuevosCurso = cursoDeProfesor.filter((item) => item !== value);
    setCursoDeProfesor(nuevosCurso);
    console.log(cursoDeProfesor);
  };

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
                      {nombreProfesor.map((datos, datosIndex) => (
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
        {cursoDeProfesor.length === 0 ? null : (
          <>
            <Button
              type="button"
              onClick={() => {
                append({ name: "" });
                // setDatosDeJornada([...datosDeJornada]);
              }}
              style={{ width: "50%" }}
            >
              Seleccionar Profesores
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
