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
    watch,
    getFieldState: { error },
    ...restFormMethods
  } = useForm({
    defaultValues: {
      items: [],
      cursosSeleccionados: [],
    },
  });

  const {
    fields: fieldsCursos,
    append: appendCursos,
    remove: removeCursos,
  } = useFieldArray({
    control,
    name: "items",
  });

  const {
    fields: fieldsCursosSeleccionados,
    append: appendCursosSeleccionados,
    remove: removeCursosSeleccionados,
    update: updateCursosSeleccionados,
  } = useFieldArray({
    control,
    name: "items2",
  });

  const items2Watch = watch("items2", []);

  // console.log({ error });

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

  // PRIMER FIELD ARRAY
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
  //
  // función de remover   los seleccionados field array uno
  //
  const handleSelectRemove = (cursoSelect, index) => {
    console.log({ index, cursoSelect });
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
    const deleteFields2 = fieldsCursosSeleccionados.filter(
      (item, i) => i !== index
    );

    // const indexToRemove = fieldsCursosSeleccionados.findIndex(
    //   (e) => e.corsos === cursoSelect
    // );

    console.log(fieldsCursosSeleccionados);
    // console.log(deleteFields2);
    // setDeleteFieldsArray(deleteFields2);
    // setValue("items2", deleteFields2);

    removeCursosSeleccionados(index);

    // setShowApend(false);
    setShowAppend(false);
    // removeCursos(index);
    console.log("handleSelectRemove");
  };
  //
  //
  // función de del append del fields uno
  const handleAppend = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);
    if (!elementoVacio) {
      appendCursos({ items: "" });
    }
    // muestra la visibilidad del texto
    // setSelectVisible(true);
    // muestra el primer selector
    setShowAppend(true);

    // setShowAppend(true);
    // setShowButton(false);
    // setShowAgregarHorario(true);
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
    // if (!historyOnchange.includes(value)) {
    //   // Si no está presente, agregar el nuevo valor al historial
    //   setHistoryOnchange([...historyOnchange, value]);
    // }
    console.log({ index });
    const elementoVacio = getValues("items").find((item) => !item.items);
    console.log(historyOnchange);
    setShowAppend(false);
    const updatedSelectedCursos = copiaSelectedCursos.filter(
      (element) => element !== value
    );
    setCopiaSelectedCursos(updatedSelectedCursos);
    setShowButton(false);
    setShowAgregarHorario(false);
    setDesactivarSubmit(false);
    // if (updatedSelectedCursos.length > 0) {
    //   appendCursosSeleccionados({ items2: "", hours: "" });
    // }
    removeCursos(index);
  };

  const handleAppend2 = (index) => {
    const elementoVacio = getValues("items2").find((item) => !item.items);
    if (fieldsCursosSeleccionados.length === 0) {
      setCopiaSelectedCursos(selectedCursos);
    }
    // if (!elementoVacio) {
    appendCursosSeleccionados({ items2: "", hours: "" });
    // }
    removeCursos(index);
    // appendCursosSeleccionados({ items2: "", hours: "" });
    setShowAppend(false);
  };

  // función de desactivar

  // const handleDesactivarSubmit = (value, index) => {
  //   // setDesactivarSubmit(primerInputVacio);

  //   if (index === 0) {
  //     setDesactivarSubmit(!!value);
  //   } else {
  //     setDesactivarSubmit(true);
  //   }
  // setDesactivarSubmit(false);
  // };

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
        <br />
        <hr />

        {selectedCursos.map((cursoSelect, index) => (
          <div key={index} className="cursoSelect">
            <p>{cursoSelect}</p>
            <Button onClick={() => handleSelectRemove(cursoSelect, index)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        ))}

        <br />
        {showAppend
          ? fieldsCursos.map((field1, index) => (
              <div key={field1.id} className="containerFields">
                <Controller
                  name={`items[${index}].cursosDisponibles`}
                  control={control}
                  defaultValues=""
                  render={({ field, fieldState }) => (
                    <div
                      style={{
                        display: "flex",
                        width: "80%",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        // border: "solid 1px red ",
                      }}
                    >
                      <Select
                        {...field}
                        style={{ width: "60%" }}
                        value={field1.corsos}
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

                      {/* <Button
                    onClick={() => {
                      // Obtén el curso a eliminar
                      setShowAgregarHorario(false);
                      setShowAppend(false);
                      removeCursos(index);
                    }}
                  >
                    <DeleteFilled
                      style={{
                        fontSize: "16px",
                        color: "#b91010",
                      }}
                    />
                  </Button> */}
                    </div>
                  )}
                />
              </div>
            ))
          : null}
        <div className="">
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
        </div>
        <br></br>
        {fieldsCursosSeleccionados.map((field2, index) => (
          <div key={index} className="containerField2">
            <Controller
              name={`items2.${index}.corsos`}
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <>
                  <Select
                    {...field}
                    style={{ width: "50%" }}
                    value={field2.corsos}
                    onChange={(value) => {
                      field.onChange(value);
                      handleSelect2Onchange(value, index);
                      updateCursosSeleccionados(index, {
                        ...field2,
                        corsos: value,
                      });
                    }}
                    //  disabled={field2.corsos !== ""}
                  >
                    {copiaSelectedCursos.map((curso, cursoIndex) => (
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
                <div>
                  <InputNumber
                    {...field}
                    placeholder="Horas"
                    onChange={(value) => {
                      field.onChange(value);
                      updateCursosSeleccionados(index, {
                        ...field2,
                        horas: value === null ? undefined : value,
                      });
                      // handleDesactivarSubmit(value, index);
                    }}
                    value={field2.horas}
                  />
                </div>
              )}
            />

            <Button
              onClick={() => {
                console.log({ index });
                removeCursosSeleccionados(index);
                setCopiaSelectedCursos([...copiaSelectedCursos, field2.corsos]);
                setShowAppend(false);
              }}
            >
              <DeleteFilled style={{ fontSize: "16px", color: "#b91010cc" }} />
            </Button>
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
            disabled={
              !fieldsCursosSeleccionados.length ||
              fieldsCursosSeleccionados.some(
                (e) => e.corsos === "" || e.horas === undefined || e.horas === 0
              )
            }
            // disabled={!!desactivarSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </form>
    </div>
  );
};
