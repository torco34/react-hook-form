import { Row, Col, Container } from "react-bootstrap";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select } from "antd";

import "../assets/css/EnrollmentCourse.css";
import { v4 as uuidv4 } from "uuid";

import { useHookCourse } from "../useContext/HooksAllProvider";

import { useState } from "react";
useHookCourse;
export const EnrollmentCourse = () => {
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    setValue,
    register,
    watch,
    setGetValue,
    getFieldState: { error },
    ...restFormMethods
  } = useForm({
    defaultValues: {
      items: [],
      cursosSeleccionados: [],
      jornadas: [],
    },
  });

  const {
    fields: fieldsCourse,
    append: appendCourse,
    remove: removeCourse,
  } = useFieldArray({
    control,
    name: "items",
  });

  const {
    fields: fieldsCourseSelected,
    append: appendCourseSelected,
    remove: removeCourseSelected,
    update: updateCourseSelected,
  } = useFieldArray({
    control,
    name: "items2",
  });
  const {
    fields: fieldsTeacherSelected,
    append: appendTeacherSelected,
    remove: removeTeacherSelected,
    update: updateTeacherSelected,
  } = useFieldArray({
    control,
    name: "items3",
  });
  const items2Watch = watch("items2", []);

  const { contextAllHooks } = useHookCourse();
  const {
    // SERVICIOS DE API

    // array de curso
    setDataTeacher,
    dataTeacher,
    setDataNameCourse,
    dataNameCourse,
    // array nombre profesor
    setDataNameTeacher,
    dataNameTeacher,
    // manipular la array
    selectedCourse,
    setSelectedCourse,
    // mostrar botones booleano
    showAppend,
    setShowAppend,
    // booleano
    setShowButton,
    showButton,
    // copia para mostrar los curso seleccionado
    copeSelectedCourse,
    setCopeSelectedCourse,
    // boolean
    // setShowButtonTime,
    // showButtonTime,
    // manipula
    courseSelectedForTeacher,
    setCourseSelectedForTeacher,

    // HOOK DE TRABAJO SELECCIÓN DE PROFESOR

    historyOnchange,
    setNameTeacher,
    nameTeacher,
    getDataInforma,
    setGetDataInforma,
    // field array
    setDataNameTime,
    dataNameTime,

    selectedName,
    setSelectedName,
    // loading
    setLoading,
    loading,
    //
  } = contextAllHooks;

  const showButtons = copeSelectedCourse.length > 0 || showButton;

  // PRIMER FIELD ARRAY
  //
  //
  //

  const handleSelectChange = (value) => {
    if (courseSelectedForTeacher.length != 0) {
    }

    const selectedCurso = dataNameCourse.find((curso) => curso.name === value);

    // FILTRANDO PARA QUE SE VEA LOS CURSO SELECT EN LOS  PROFESOR
    // Actualizar el estado de profesores disponibles
    if (!courseSelectedForTeacher.includes(value)) {
      // Agregar el valor a la lista de seleccionados
      setCourseSelectedForTeacher([...courseSelectedForTeacher, value]);
    }

    //
    //
    // SECTION DE NOMBRE PROFESORES
    if (courseSelectedForTeacher.length === 0) {
      const nombre = dataNameTeacher[0];
      setNameTeacher([...nameTeacher, nombre]);
    }
    if (courseSelectedForTeacher.length == 1) {
      const nombre = dataNameTeacher[1];
      setNameTeacher([...nameTeacher, nombre]);
    }
    if (courseSelectedForTeacher.length === 2) {
      const nombre = dataNameTeacher[2];
      setNameTeacher([...nameTeacher, nombre]);
    }

    if (courseSelectedForTeacher.length === 3) {
      const nombre = dataNameTeacher[3];
      setNameTeacher([...nameTeacher, nombre]);
    }

    if (courseSelectedForTeacher.length === 4) {
      const nombre = dataNameTeacher[4];
      setNameTeacher([...nameTeacher, nombre]);
    }

    if (courseSelectedForTeacher.length === 5) {
      const nombre = dataNameTeacher[5];
      setNameTeacher([...nameTeacher, nombre]);
    }

    setCopeSelectedCourse([...copeSelectedCourse, selectedCurso.name]);
    setSelectedCourse([...selectedCourse, selectedCurso.name]);
    const cursosRestantes = dataNameCourse.filter(
      (curso) => curso.name !== value
    );

    setDataNameCourse(cursosRestantes);
    setShowAppend(true);
    if (cursosRestantes.length === 0) {
    }
  };
  //
  // función de remover   los seleccionados field array uno
  //
  const handleSelectRemove = (cursoSelect, index) => {
    const restanteCurso = selectedCourse.filter(
      (curso) => curso !== cursoSelect
    );
    setSelectedCourse(restanteCurso);

    const updatedCopiaSelectedCursos = copeSelectedCourse.filter(
      (element) => element !== cursoSelect
    );

    setCopeSelectedCourse(updatedCopiaSelectedCursos);
    // actualiza el estado de los curso seleccionado del profesor
    setCourseSelectedForTeacher(updatedCopiaSelectedCursos);
    setDataNameCourse([...dataNameCourse, { id: uuidv4(), name: cursoSelect }]);
    const deleteFields2 = fieldsCourseSelected.filter((item, i) => i !== index);

    // setDeleteFieldsArray(deleteFields2);
    // setValue("items2", deleteFields2);

    removeCourseSelected(index);

    // setShowApend(false);
    setShowAppend(false);
  };
  //
  //
  // función de del append del fields uno

  const handleAppend = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);
    if (!elementoVacio) {
      appendCourse({ items: "" });
    }

    setShowAppend(true);
  };
  //
  //
  // SEGUNDO FIELD ARRAY
  //
  //
  // el onchange del segundo fiel array
  //
  //
  const handleSelect2Onchange = (value, index) => {
    const elementoVacio = getValues("items").find((item) => !item.items);

    setShowAppend(false);
    const updatedSelectedCursos = copeSelectedCourse.filter(
      (element) => element !== value
    );
    setCopeSelectedCourse(updatedSelectedCursos);
    setShowButton(false);

    removeCourse(index);
  };

  const handleAppend2 = (index) => {
    const elementoVacio = getValues("items2").find((item) => !item.items);
    if (fieldsCourseSelected.length === 0) {
      setCopeSelectedCourse(selectedCourse);
    }
    // if (!elementoVacio) {
    appendCourseSelected({ items2: "", hours: "" });
    // }
    removeCourse(index);
    // appendCursosSeleccionados({ items2: "", hours: "" });
    setShowAppend(false);
  };
  // LOGICA DE PROFESOR

  const handleProfeOnchange = (value) => {
    const index = selectedName.indexOf(value);

    if (index === -1) {
      setSelectedName([...selectedName, value]);
    } else {
      const nuevaArray = nameTeacher.filter((item) => item.name !== value);
      setNameTeacher(nuevaArray);
    }
  };

  const handleJornadaOnchange = (value) => {
    const time = value;

    const nuevoArray = dataNameTime.filter((item) => item.name !== time);

    setDataNameTime(nuevoArray);

    if (nuevoArray.length === 0) {
      setDataNameTime(dataNameTime);
      const { name } = dataNameTime;
    }
  };
  const handleCursosOnchange = (value) => {
    const nuevosCurso = courseSelectedForTeacher.filter(
      (item) => item !== value
    );
    setCourseSelectedForTeacher(nuevosCurso);
  };
  const onSubmit = async (data, index) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      setGetDataInforma([...getDataInforma, data]);
    } catch (error) {
      console.err(" A ocurrido un error ", data);
    } finally {
      setLoading(false);
    }

    reset([]);
    setSelectedCourse([]);
  };

  return (
    <div className="body-fields">
      <Row>
        <Col xs lg="12">
          <div className="div-padre-form   show rounded ">
            <h2>Inscripción de materias</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="formulario p-5 input-field"
            >
              <label>Nombre:</label>
              <Controller
                name={"name"}
                control={control}
                defaultValue=""
                rules={{
                  required: "Este campo  requiere apellido",
                  minLength: {
                    value: 2,
                    message: "Nombre debe tener al menos 2 caracteres",
                  },
                }}
                render={({ field, fieldState }) => (
                  <div key={field}>
                    <Input {...field} placeholder="Nombre" />
                    {fieldState.invalid && (
                      <p style={{ color: "red" }}>
                        {fieldState.error?.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <br></br>
              <label>Apellidos:</label>
              <Controller
                name={"apellido"}
                control={control}
                defaultValue=""
                rules={{
                  required: "Este campo  requiere apellido",
                  minLength: {
                    value: 2,
                    message: "Nombre debe tener al menos 2 caracteres",
                  },
                }}
                render={({ field, fieldState }) => (
                  <div className="inputs">
                    <Input {...field} placeholder="Apellido" />
                    {fieldState.invalid && (
                      <p style={{ color: "red" }}>
                        {fieldState.error?.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <br></br>
              <label>Correo:</label>
              <Controller
                name={`address`}
                control={control}
                defaultValue=""
                rules={{
                  required: "Este campo  require correo ",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Dirección de correo electrónico no válida",
                  },
                }}
                render={({ field, fieldState }) => (
                  <div>
                    <Input {...field} placeholder="Correo" />
                    {fieldState.invalid && (
                      <p style={{ color: "red" }}>
                        {fieldState.error?.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <br />
              <hr />

              {selectedCourse.map((cursoSelect, index) => (
                <div key={index} className="cursoSelect">
                  <p>{cursoSelect}</p>
                  <Button
                    onClick={() => handleSelectRemove(cursoSelect, index)}
                    className="button"
                  >
                    <DeleteFilled style={{ color: "#334257" }} />
                  </Button>
                </div>
              ))}

              <br />
              {showAppend
                ? fieldsCourse.map((field1, index) => (
                    <div key={field1.id} className="containerFields">
                      <Controller
                        name={`items[${index}].cursosDisponibles`}
                        control={control}
                        defaultValues=""
                        render={({ field, fieldState }) => (
                          <div>
                            <Select
                              {...field}
                              style={{
                                width: "80%",
                              }}
                              value={field1.corsos}
                              onChange={(value) => {
                                field.onChange(value);
                                handleSelectChange(value, index);
                              }}
                            >
                              {dataNameCourse.map((curso) => (
                                <Select.Option
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
                    </div>
                  ))
                : null}
              <div className="">
                {selectedCourse.length === 5 ? (
                  <>
                    <p>No hay cursos</p>
                  </>
                ) : (
                  <>
                    {showAppend ? null : (
                      <Button
                        style={{
                          width: "60%",
                          color: "#334257",
                          background: "#dde6ed",
                        }}
                        onClick={handleAppend}
                      >
                        Seleccionar cursos
                      </Button>
                    )}
                  </>
                )}
              </div>
              <br></br>
              {fieldsCourseSelected.map((field2, index) => (
                <div key={index} className="containerField2">
                  <Controller
                    name={`items2.${index}.corsos`}
                    control={control}
                    defaultValue={null}
                    render={({ field }) => (
                      <>
                        <Select
                          {...field}
                          style={{
                            width: "80%",
                          }}
                          value={field2.corsos}
                          onChange={(value) => {
                            field.onChange(value);
                            handleSelect2Onchange(value, index);
                            updateCourseSelected(index, {
                              ...field2,
                              corsos: value,
                            });
                          }}
                          disabled={
                            field2.corsos !== null &&
                            field2.corsos !== undefined &&
                            field2.corsos !== ""
                          }
                        >
                          {copeSelectedCourse.map((curso, cursoIndex) => (
                            <Select.Option
                              onClick={handleSelectRemove}
                              key={curso}
                              value={curso.name}
                            >
                              {curso.name}
                            </Select.Option>
                          ))}
                        </Select>
                      </>
                    )}
                  />
                  <br />

                  <Controller
                    name={`items2[${index}].horas`}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <div className="">
                        <InputNumber
                          {...field}
                          placeholder="Horas"
                          onChange={(value) => {
                            field.onChange(value);
                            updateCourseSelected(index, {
                              ...field2,
                              horas: value === null ? undefined : value,
                            });
                          }}
                          value={field2.horas}
                        />
                      </div>
                    )}
                  />

                  <Button
                    onClick={() => {
                      removeCourseSelected(index);
                      setCopeSelectedCourse([
                        ...copeSelectedCourse,
                        field2.corsos,
                      ]);
                      setShowAppend(false);
                    }}
                    className="button"
                  >
                    <DeleteFilled style={{ color: "#334257" }} />
                  </Button>
                </div>
              ))}

              <br></br>

              <br></br>

              <div>
                {copeSelectedCourse.length === 0 || !showButtons ? null : (
                  <Button
                    style={{
                      width: "60%",
                      color: "#334257",
                      background: "#dde6ed",
                    }}
                    onClick={handleAppend2}
                  >
                    Agregar el horario
                  </Button>
                )}
              </div>
              <br></br>
              {/* PROFESOR */}
              {fieldsTeacherSelected.map((field, index) => (
                <div key={field.id} className="containerProfesor">
                  {/* TENER EN CUENTA QUE AQUI CAMBIA EL ORDEN DEL FIEL ARRAY */}
                  <div>
                    <div className="div-fil-spaces">
                      <br />
                      <label>Profesor:</label>
                      <Controller
                        name={`items3.${index}.profesor`}
                        control={control}
                        defaultValues=""
                        render={({ field }) => (
                          <div>
                            <Select
                              {...field}
                              style={{ width: "80%" }}
                              //  esto hace que lo seleccionado se vea en el input
                              value={field.corso}
                              onChange={(value) => {
                                field.onChange(value);
                                handleProfeOnchange(value, index);
                              }}
                            >
                              {nameTeacher.map((datos, datosIndex) => (
                                <Select.Option
                                  key={datosIndex}
                                  value={datos.name}

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
                      <br />
                      <label>Cursos:</label>
                      <Controller
                        name={`items3.${index}.curso`}
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Select
                              {...field}
                              style={{ width: "80%" }}
                              value={field.curso}
                              onChange={(value) => {
                                field.onChange(value);
                                handleCursosOnchange(value, index);
                              }}
                            >
                              {courseSelectedForTeacher.map(
                                (curso, cursoIndex) => (
                                  <Select.Option
                                    onClick={handleProfeOnchange}
                                    key={curso}
                                    value={curso.name}
                                  >
                                    {curso.name}
                                  </Select.Option>
                                )
                              )}
                            </Select>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="div-fil-spaces">
                      <br />
                      <label>Jornada:</label>
                      <Controller
                        name={`items3.${index}.jornada`}
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Select
                              {...field}
                              style={{ width: "80%" }}
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
                  <br />
                  <div>
                    <Button
                      onClick={() => {
                        removeTeacherSelected(index);
                      }}
                      className="button"
                    >
                      <DeleteFilled style={{ color: "#334257" }} />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="selectedProfe ">
                <br />
                {courseSelectedForTeacher.length === 0 ? null : (
                  <>
                    <Button
                      onClick={() => {
                        appendTeacherSelected({ name: "" });
                      }}
                      style={{
                        width: "60%",
                        color: "#334257",
                        background: "#dde6ed",
                      }}
                    >
                      Seleccionar Profesores
                    </Button>
                  </>
                )}
              </div>
              <br></br>
              <Form.Item wrapperCol={{ offset: 10, span: 1 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !fieldsCourseSelected.length ||
                    fieldsCourseSelected.some(
                      (e) =>
                        e.corsos === "" ||
                        e.horas === undefined ||
                        e.horas === 0
                    )
                  }
                >
                  Enviar
                </Button>
              </Form.Item>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
