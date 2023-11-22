import React, { useEffect, useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { DeleteFilled } from "@ant-design/icons";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { useMaterias } from "./useContext/CursosProvider";
import "./css/styles.css";
import { v4 as uuidv4 } from "uuid";

export const PageIndex = () => {
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
  const { contextTodosHookLogica } = useMaterias();
  const {
    // hooks
    cursosDisponibles,
    selectedCursos,
    setCopiaSelectedCursos,
    copiaSelectedCursos,

    showAppend,
    setCursosDisponibles,
    setSelectedCursos,
    setShowAppend,
    selectVisible,
    setSelectVisible,
    showAppendCursos,
    setDesactivarSubmit,

    setShowAgregarHorario,
    desactivarSubmit,
    historyOnchange,
    setHistoryOnchange,
    deleteFieldsArray,
    setDeleteFieldsArray,
    setShowButton,
    showButton,
  } = contextTodosHookLogica;

  const showButtons = copiaSelectedCursos.length > 0 || showButton;

  // PRIMER FIELDARRAY
  //
  //
  //
  const handleSelectChange = (value, index) => {
    //
    const selectedCurso = cursosDisponibles.find(
      (curso) => curso.name === value
    );
    // setSelectVisible(false);

    setCopiaSelectedCursos([...copiaSelectedCursos, selectedCurso.name]);

    setSelectedCursos([...selectedCursos, selectedCurso.name]);
    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso.name !== value
    );
    console.log(cursosRestantes);
    setCursosDisponibles(cursosRestantes);
    setShowAppend(true);
    if (cursosRestantes.length === 0) {
      console.log("hola mundo");
    }
  };

  // SEGUNDO FIELD ARRAY
  const handleSelect2Onchange = (value, index) => {
    if (!historyOnchange.includes(value)) {
      // Si no está presente, agregar el nuevo valor al historial
      setHistoryOnchange([...historyOnchange, value]);
    }

    console.log(historyOnchange);
    setShowAppend(false);
    const updatedSelectedCursos = copiaSelectedCursos.filter(
      (element) => element !== value
    );
    setCopiaSelectedCursos(updatedSelectedCursos);
    setShowButton(false);
    setShowAgregarHorario(false);
    if (updatedSelectedCursos.length > 0) {
      append2({ items2: "", hours: "" });
    }
    remove(index);
  };
  const handleAppend = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);
    if (!elementoVacio) {
      append({ items: "" });
    }
    // muestra la visibilidad del texto
    // setSelectVisible(true);
    // muestra el primer selector
    setShowAppend(true);
 
    // setShowAppend(true);
    // setShowButton(false);
    // setShowAgregarHorario(true);
  };

  const handleAppend2 = (index) => {
    if (fields2.length === 0) {
      setCopiaSelectedCursos(selectedCursos);
    }
    append2({ items2: "", hours: "" });
    remove(index);

    setShowAppend(false);
  };

  //
  //
  // Funcion de remover curso selector primer field array

  const handleSelectRemove = (cursoSelect, index) => {
    const restanteCurso = selectedCursos.filter(
      (curso) => curso !== cursoSelect
    );
    setSelectedCursos(restanteCurso);

    const updatedCopiaSelectedCursos = copiaSelectedCursos.filter(
      (element) => element !== cursoSelect
    );

    setCopiaSelectedCursos(updatedCopiaSelectedCursos);

    setCursosDisponibles([
      ...cursosDisponibles,
      { id: uuidv4(), name: cursoSelect },
    ]);
    const deleteFields2 = fields2.filter((item, i) => i !== index);
    console.log(fields2);
    console.log(deleteFields2);
    setDeleteFieldsArray(deleteFields2);
    remove2(deleteFields2);
    // setShowAppend(false);
    setShowAppend(false);
    remove(index);
    console.log("handleSelectRemove")
  
  };
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
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
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

        <br></br>
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
        <br></br>
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
        <br></br>
        <hr></hr>

        {selectedCursos.map((cursoSelect, index) => (
          <div key={index} className="cursoSelect">
            <p>{cursoSelect}</p>
            <Button onClick={() => handleSelectRemove(cursoSelect, index)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        ))}

        <br></br>
        {fields.map((field, index) => (
          <div key={field.id} className="">
            <Controller
              name={`items[${index}].cursosDisponibles`}
              control={control}
              defaultValues=""
              render={({ field, fieldState }) => (
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
                    value={field.id}
                    onChange={(value) => {
                      field.onChange(value);
                      handleSelectChange(value, index);
                    }}
                  >
                    {cursosDisponibles.map((curso) => (
                      <Select.Option key={curso.id} value={curso.name}>
                        {curso.name}
                      </Select.Option>
                    ))}
                  </Select>

                  <Button
                    onClick={() => {
                      // Obtén el curso a eliminar
                      // setShowAppend(false);
                      remove(index);
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
            />
          </div>
        ))}
        {selectedCursos.length === 5 ? (
          <>
            <p>No hay cursos</p>
          </>
        ) : (
          <>
            {showAppend ? null : (
              <Button type="button" onClick={handleAppend}>
                Seleccionar cursos
              </Button>
            )}
          </>
        )}
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
                      style={{ width: "60%" }}
                      value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                        handleSelect2Onchange(value, index);
                      }}

                      // disabled={bloqueSelect}
                    >
                      {copiaSelectedCursos.map((curso, cursoIndex) => (
                        <Select.Option
                          onClick={handleSelectRemove}
                          key={curso}
                          value={curso && curso.name}
                        >
                          {curso && curso.name}
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

              {/* <Button onClick={() => remove2(index)}>
                <DeleteFilled
                  style={{ fontSize: "16px", color: "#b91010cc" }}
                />
              </Button> */}
            </div>
          </div>
        ))}

        <br></br>

        {/* <Button type="button" onClick={handleAppend}>
          Seleccionar cursos
        </Button> */}
        <br></br>

        <div>
          {copiaSelectedCursos.length === 0 || !showButtons ? null : (
            <Button type="button" onClick={handleAppend2}>
              Agregar el horario
            </Button>
          )}
        </div>
        <br></br>
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
      </form>
    </div>
  );
};
