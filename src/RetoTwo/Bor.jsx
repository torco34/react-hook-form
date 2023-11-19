import React, { useEffect, useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { DeleteFilled } from "@ant-design/icons";

import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { v4 as uuidv4 } from "uuid";
const cursos = [
  "Informática",
  "Matemáticas",
  "Administración",
  "Estadísticas",
  "Ingles",
];

export const Bor = ({}) => {
  const [selectedCursos, setSelectedCursos] = useState([]);
  const [cursosDisponibles, setCursosDisponibles] = useState(cursos);
  const [selectVisible, setSelectVisible] = useState(false);
  const [desactivarSubmit, setDesactivarSubmit] = useState();
  const [showAgregarHorario, setShowAgregarHorario] = useState(false);
  const [showAppend, setShowAppend] = useState(false);
  const [copiaSelectedCursos, setCopiaSelectedCursos] = useState([]);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    setValue,
    register,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      items: [],
      cursosSeleccionados: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control,
    name: "items2",
  });

  // FUNCIÓN DEL PRIMER SELECT FIELD ARRAY
  // filtra para esconder
  //
  //
  //
  const handleSelectChange = (value, index) => {
    // aquí selected capsula el curso seleccionado
    const selected = value;

    //  se esta copiando, para el segundo selector
    setSelectVisible(false);
    setCopiaSelectedCursos([...copiaSelectedCursos, selected]);
    // console.log(copiaSelectedCursos, "en el primer onchange copiaSelectedCursos");
    const selectedCourses =
      getValues(`items[${index}].cursosDisponibles`) || [];

    setValue(`items[${index}].cursosDisponibles`, selectedCourses);
    // a qui se agrega a la array  el curso seleccionado
    setSelectedCursos([...selectedCursos, selected]);
    // a qui creamos una nueva array sin el cuso seleccionado
    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso !== selected
    );
    console.log(selectedCursos, "aaa");
    // setCopiaSelectedCursos([...copiaSelectedCursos, selected]);
    setCursosDisponibles(cursosRestantes);
    setShowAppend(false);
  };

  //
  //
  //
  // remueve el curso seleccionado primer field Array

  const handleSelectRemoval = (index) => {
    const cursoEliminado = selectedCursos[index];
    const cursoFil = selectedCursos.filter((c, i) => i !== index);
    remove(index);
    setSelectedCursos(cursoFil);
    setCursosDisponibles([...cursosDisponibles, cursoEliminado]);
    setShowButton(false);

    remove2(index);
    // setSelectedCursos(indexInSecondArray)
  };

  // Agregar el primer input
  const appendAgregar = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);

    if (!elementoVacio) {
      append({ items: "" });
    }
    setSelectVisible(true);
    setShowAgregarHorario(true);
    // esconde boton seleccionar curso
    setShowAppend(true);
    setShowButton(false);
  };

  // Guardar de nuevo los curso en el primer selector
  const [showButton, setShowButton] = useState(false);

  const [elementosDesaparecidos, setElementosDesaparecidos] = useState([]);

  const showButtons = copiaSelectedCursos.length > 0 || showButton;

  const handleGuardarClick = (index) => {
    const currentIndex = index;
    remove2(currentIndex);
    remove(index);
    setShowAgregarHorario(true);
    setShowButton(true);
  };

  // FUNCIÓN SEGUNDO SELECTOR FIELD ARRAY
  //
  //
  //
  const handleSelect2Change = (value) => {
    const select2Valor = value;

    const updatedSelectedCursos = copiaSelectedCursos.filter(
      (element) => element !== select2Valor
    );

    console.log(updatedSelectedCursos, "resultodo del filtro");
    setElementosDesaparecidos((prevElementos) => [
      ...prevElementos,
      select2Valor,
    ]);
    setCopiaSelectedCursos(updatedSelectedCursos);

    if (updatedSelectedCursos.length > 0) {
      append2({ items2: "", hours: "" });
      setShowAgregarHorario(false);
      setShowButton(false);
    }
    setShowButton(false);
    setShowAgregarHorario(false);
  };
  // append segundo field array
  //
  //
  //
  const handleAppend2 = () => {
    append2({ items2: "", hours: "" });

    if (fields2.length === 0) {
      setCopiaSelectedCursos(selectedCursos);

      setDesactivarSubmit(false);
    }

    //  Muestra el text de select  "agregar horario"
    setShowAgregarHorario(true);
    setShowButton(false);
  };
  //  onchange del inputNumber segundo field array
  //
  //
  const handleDesactivarSubmit = (value, index) => {
    // setDesactivarSubmit(primerInputVacio);

    if (index === 0) {
      setDesactivarSubmit(!!value);
    } else {
      setDesactivarSubmit(true);
    }
    // setDesactivarSubmit(false);
  };

  const onSubmit = (data) => {
    console.log(data);

    // reset();
    // setSelectedCursos([""]);
  };
  return (
    <div
      className="border"
      style={{
        width: "70%",
        background: "#F5F5F5",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
                  <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          />
          <br />
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
              <div>
                <Input {...field} placeholder="Apellido" />
                {fieldState.invalid && (
                  <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          />
          <br />
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
                  <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          />
        </div>
        <br></br>
        <hr></hr>
        <br />
        {selectedCursos.map((cursoSelect, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "200px",
              height: "30px",
              marginBottom: "8px",
            }}
          >
            {/* Se muestran los cursos seleccionados */}

            <p>{cursoSelect} </p>
            <Button onClick={() => handleSelectRemoval(index)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        ))}
        {fields.map((item, index) => (
          <div key={item.id} style={{}}>
            <Controller
              name={`items[${index}].cursosDisponibles`}
              control={control}
              defaultValues=""
              rules={{
                required: selectVisible
                  ? "Debe seleccionar una carrera"
                  : false,
                minLength: selectVisible
                  ? {
                      value: 2,
                      message: "Nombre debe tener al menos 2 caracteres",
                    }
                  : false,
              }}
              render={({ field, fieldState }) => (
                <div>
                  {/* lógica para   mostrar el input */}

                  <div style={{ width: "100%" }}></div>
                  {selectVisible && (
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                        marginBottom: "8px",
                        // border: "solid 1px red ",
                      }}
                    >
                      <Select
                        {...field}
                        style={{ width: "90%" }}
                        value={field.value}
                        onChange={(value) => {
                          field.onChange(value);
                          handleSelectChange(value, index);
                        }}
                      >
                        {cursosDisponibles.map((curso, index) => (
                          <Select.Option key={index} value={curso}>
                            {curso}
                          </Select.Option>
                        ))}
                      </Select>

                      <Button
                        onClick={() => {
                          remove(index);

                          setShowAppend(false);
                        }}
                      >
                        <DeleteFilled
                          style={{
                            fontSize: "16px",
                            color: "#b91010",
                          }}
                        />
                      </Button>
                    </div>
                  )}

                  {fieldState.invalid && (
                    <p style={{ color: "#b91010" }}>
                      {fieldState.error?.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        ))}

        {selectedCursos.length === 5 ? (
          <>
            <p>No hay carreras </p>
          </>
        ) : (
          <div
            style={{
              marginTop: "20px",
              width: "100%",
              paddingBottom: "20px",
            }}
          >
            {showAppend ? null : (
              <>
                <Button type="button" onClick={appendAgregar}>
                  Seleccionar cursos
                </Button>
              </>
            )}
          </div>
        )}
        <ul>
          {fields2.map((field2, index) => (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  width: "60%",
                  justifyContent: "space-around",
                  padding: "10px",
                  border: "soli1px",
                }}
              >
                <Controller
                  name={`items2.${index}.corsos`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <Select
                        {...field}
                        style={{ width: "50%" }}
                        // value={field.value}
                        onChange={(value) => {
                          field.onChange(value);
                          handleSelect2Change(value, index);
                        }}

                        // disabled={bloqueSelect}
                      >
                        {copiaSelectedCursos.map((curso2, cursoIndex) => (
                          <Select.Option key={cursoIndex} value={curso2}>
                            {curso2}
                          </Select.Option>
                        ))}
                      </Select>
                    </>
                  )}
                />

                <Controller
                  name={`items2[${index}].horas`}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <div>
                      <InputNumber
                        {...field}
                        placeholder="Horas"
                        onChange={(value) => {
                          field.onChange(value);
                          handleDesactivarSubmit(value, index);
                        }}
                      />
                    </div>
                  )}
                />

                <Button onClick={() => handleGuardarClick(index)}>
                  <DeleteFilled
                    style={{ fontSize: "16px", color: "#b91010cc" }}
                  />
                </Button>
              </div>
            </div>
          ))}
        </ul>
        <div>
          {copiaSelectedCursos.length === 0 || !showButtons ? null : (
            <Button type="button" onClick={handleAppend2}>
              Agregar el horario
            </Button>
          )}
        </div>

        <br></br>
        {}
        <div>
          <Form.Item wrapperCol={{ offset: 10, span: 1 }}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={fields2.length === 0 || !desactivarSubmit}
              // disabled={!!desactivarSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </form>
    </div>
  );
};
