import React, { useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { DeleteFilled } from "@ant-design/icons";
import { Selector } from "./Selector";
import { Profesor } from "./Profesor";
// import DeleteFilled from "@ant-design/icons";
export const Proyecto = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const CURSOS = [
    { value: "Ingles", label: "Ingles" },
    { value: "Informática", label: "Informática" },
    { value: "Matemáticas", label: "Matemáticas" },
    { value: "Administración", label: "Administración" },
    { value: "Estadísticas", label: "Estadísticas" },
  ];

  const { control, register, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      items: [{ firstName: "Bill", lastName: "Luo" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Field Array Watch trabajo</h1>
        <p>Persona roles</p>
        <Controller
          name="selectedPerson"
          control={control}
          render={({ field }) => (
            <Select {...field} label="name" style={{ width: "100%" }}>
              <option value="student">Estudiante</option>
              <option value="teacher">Profesor</option>
            </Select>
          )}
        />
        <hr />
        {watch("selectedPerson") === "student" ? (
          <>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Form.Item label="name" rules={[{ required: true }]}>
                  <Input {...field} placeholder="Full name" />
                </Form.Item>
              )}
            />
            <Controller
              control={control}
              name="surnames"
              render={({ field }) => (
                <Form.Item label="Surnames" rules={[{ required: true }]}>
                  <Input {...field} placeholder="Surnames" />
                </Form.Item>
              )}
            />

            <Controller
              control={control}
              name="ege"
              render={({ field }) => (
                <Form.Item label="edad" rules={[{ required: true }]}>
                  <Input {...field} placeholder="Edad" />
                </Form.Item>
              )}
            />
            <Selector />
          </>
        ) : null}
        {watch("selectedPerson") === "teacher" ? (
          <>
            {fields.map((item, index) => (
              <div key={item.id} style={{ display: "flex", width: "100%" }}>
                <Controller
                  render={({ field }) => (
                    <>
                      <Form.Item label="nombre" rules={[{ required: true }]}>
                        <Input
                          {...field}
                          {...register(`items${index}.lastName`, {
                            required: true,
                          })}
                        />
                      </Form.Item>
                    </>
                  )}
                  name={`test.${index}.lastName`}
                  control={control}
                />
                <Button type="button" onClick={() => remove(index)}>
                  <DeleteFilled
                    style={{ fontSize: "20px", color: "#f12b08cc" }}
                  />
                </Button>
              </div>
            ))}
            <Profesor />
            <Button onClick={() => append({})}>Agregar campos</Button>
          </>
        ) : null}
      </form>
    </>
  );
};
