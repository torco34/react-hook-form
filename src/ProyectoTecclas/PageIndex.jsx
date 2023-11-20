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
    // hooks
    cursosDisponibles,
    selectedCursos,
    copiaSelectedCursos,
    setCopiaSelectedCursos,
    // handleOnclick
    handleSelectRemoval,
    handleSelectChange,
    handleSelect2Change,
    
  } = contextTodosHookLogica;

  const appendAgregar = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);
    console.log(elementoVacio);

    if (!elementoVacio) {
      append({ items: "" });
    }
  };

  const handleAppend2 = () => {
    append2({ items2: "", hours: "" });

    if (fields2.length === 0) {
      // setCopiaSelectedCursos(selectedCursos);
    }

    //  Muestra el text de select  "agregar horario"
  };

  const handleGuardarClick = (index) => {
    const currentIndex = index;
    remove2(currentIndex);
    remove(index);
   
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
            <Button onClick={() => handleSelectRemoval(cursoSelect, index)}>
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
                      value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                        handleSelect2Change(value, index);
                      }}

                      // disabled={bloqueSelect}
                    >
                      {copiaSelectedCursos.map((curso, cursoIndex) => (
                        <Select.Option
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

              <Button onClick={() => handleGuardarClick(index)}>
                <DeleteFilled
                  style={{ fontSize: "16px", color: "#b91010cc" }}
                />
              </Button>
            </div>
          </div>
        ))}
        <br></br>
        <br></br>
        <br></br>
        <Button type="button" onClick={appendAgregar}>
          Seleccionar cursos
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <Button type="button" onClick={handleAppend2}>
          Agregar el horario
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <Form.Item wrapperCol={{ offset: 10, span: 1 }}>
          <Button
            type="primary"
            htmlType="submit"
            // disabled={fields2.length === 0 || !desactivarSubmit}
            // disabled={!!desactivarSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
