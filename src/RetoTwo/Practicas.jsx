import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import "./css/Style.css";
import { DeleteFilled } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
const cursos = [
  "Ingles",
  "Informática",
  "Matemáticas",
  "Administración",
  "Estadísticas",
];
export const Practicas = () => {
  const [cursoSelect, setCursoSelect] = useState([]);
  const [arrayCursos, setArrayCursos] = useState(cursos);
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
  //  FUNCIONES DE ANT DESIGN
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // FUNCIONES PARA MANEJAR EL ESTADO
  const handleSelectArray = (selectedValue, index) => {
    setCursoSelect([...cursoSelect, selectedValue]);

    const cursosRestantes = arrayCursos.filter(
      (curso) => curso !== selectedValue
    );
    setArrayCursos(cursosRestantes);
    append({ nombre: "" });
  };
  const onSubmit = (data) => {
    console.log(data);
    reset();
    // setSelectedCursos([""]);
  };
  return (
    <div>
      <h2>Practicas </h2>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 15,
        }}
        style={{
          maxWidth: "100%",
          background: "#F1EFEF",
          padding: "30px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Controller
            name="nombre"
            control={control}
            render={({ field }) => (
              <Form.Item
                label="Nombre"
                name="nombre"
                {...field}
                rules={[
                  {
                    required: true,
                    message: "Agregue tu nombre!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            )}
          />

          <Controller
            name="apellido"
            control={control}
            render={({ field }) => (
              <Form.Item
                label="Apellidos"
                name="apellido"
                {...field}
                rules={[
                  {
                    required: true,
                    message: "Agregue los apellidos !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            )}
          />
          <Controller
            name="correo"
            control={control}
            render={({ field }) => (
              <Form.Item
                label="Correo"
                name="correo"
                {...field}
                rules={[
                  {
                    required: true,
                    message: "Ingresas tu correo electrónico!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            )}
          />

          {fields.map((field, index) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Controller
                name={`items.${index}.cursos`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div className="selecto">
                    <Select
                      className="select"
                      {...field}
                      value={field.value}
                      onChange={(value) => {
                        const selectedValue = value;
                        field.onChange(selectedValue);
                        handleSelectArray(selectedValue, index);
                      }}
                      // style={{ width: "40%" }}
                    >
                      {arrayCursos.map((item, index) => (
                        <Select.Option key={index} value={item}>
                          {item}
                        </Select.Option>
                      ))}
                    </Select>

                    <Button type="button" onClick={() => remove(index)}>
                      <DeleteFilled
                        style={{ fontSize: "14px", color: "#b91010cc" }}
                      />
                    </Button>
                  </div>
                )}
              />
            </div>
          ))}
          <Button onClick={() => append({ nombre: "" })}>Agregar cursos</Button>
        </div>{" "}
      </Form>
    </div>
  );
};
