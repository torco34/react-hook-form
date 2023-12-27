import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useHookCourse } from "../useContext/HooksAllProvider";

import { useEffect, useState } from "react";

export const FieldsTeacher = () => {
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

  const { contextAllHooks } = useHookCourse();
  const {
    // SERVICIOS DE API
    setDataNameTeacher,
    dataNameTeacher,

    setDataNameTime,
    dataNameTime,
    //
    // curso seleccionados para agregar profesor
    courseSelectedForTeacher,
    setCourseSelectedForTeacher,
    // seleccionar nombre del profesor
    selectedName,
    setSelectedName,
    //
    selectedTime,
    setSelectedTime,
    //
  } = contextAllHooks;

  const handleProfeOnchange = (value) => {
    const index = selectedName.indexOf(value);
    if (index === -1) {
      setSelectedName([...selectedName, value]);
    } else {
      const nuevaArray = dataNameTeacher.filter((item) => item.name !== value);
      setDataNameTeacher(nuevaArray);
    }
  };

  const handleJornadaOnchange = (value) => {
    const index = selectedTime.indexOf(value);
    console.log(index, "index");
    if (index === -1) {
      setSelectedTime([...selectedTime, value]);
    } else {
      if (selectedTime === "Mañana") {
      }

      const nuevaDatosDeJornada = dataNameTime.filter(
        (item) => item.name !== value
      );
      setDataNameTime(nuevaDatosDeJornada);
    }
  };

  const handleCursosOnchange = (value) => {
    const nuevosCurso = courseSelectedForTeacher.filter(
      (item) => item !== value
    );
    setCourseSelectedForTeacher(nuevosCurso);
    console.log(courseSelectedForTeacher, "hola mundo hp");
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
                      {dataNameTeacher.map((datos, datosIndex) => (
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
                      {courseSelectedForTeacher.map((curso, cursoIndex) => (
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
                      {dataNameTime.map((jornada, cursoIndex) => (
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
        {courseSelectedForTeacher.length === 0 ? null : (
          <>
            <Button
              type="button"
              onClick={() => {
                append({ name: "" });
                // setDatosDeJornada(datosDeJornada);
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
