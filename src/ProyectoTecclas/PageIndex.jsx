import React, { useEffect, useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { DeleteFilled } from "@ant-design/icons";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { useMaterias } from "./useContext/CursosProvider";
import "./css/styles.css";
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
  const {
    contextTodosHookLogica,

    // handleSelectRemoval,

    selectVisible,
  } = useMaterias();
  const {
    cursosDisponibles,
    handleSelectChange,
    selectedCursos,
    handleSelectRemoval,
    // appendAgregar,
  } = contextTodosHookLogica;
  const appendAgregar = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);
    console.log(elementoVacio);

    if (!elementoVacio) {
      append({ items: "" });
    }
  };
  const onSubmit = (data) => {
    console.log(data);

    // reset();
    // setSelectedCursos([""]);
  };
  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)} className="formulario">
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
            <Button onClick={() => handleSelectRemoval(cursoSelect)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        ))}

        <br></br>
        {fields.map((field, index) => (
          <div key={index} className="">
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
                    {cursosDisponibles.map((curso, cursoIndex) => (
                      <Select.Option key={curso.id} value={curso && curso.name}>
                        {curso && curso.name}
                      </Select.Option>
                    ))}
                  </Select>

                  <Button
                    onClick={() => {
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
        <Button type="button" onClick={appendAgregar}>
          Seleccionar cursos
        </Button>
      </Form>
    </div>
  );
};
