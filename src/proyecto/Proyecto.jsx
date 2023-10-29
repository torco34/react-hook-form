import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
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
export const Proyecto = () => {
  const [selectedCursos, setSelectedCursos] = useState([]);
  const [cursosDisponibles, setCursosDisponibles] = useState(cursos);
  const [selectVisible, setSelectVisible] = useState(false);
  const [cursoSelect, setCursoSelect] = useState({});
  const [numeroSelect, setNumeroSelect] = useState({});
  const { control, handleSubmit, getValues, reset, setValue, register } =
    useForm({
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
  const handleSelectChange = (e, index) => {
    // a qui selected capsula el curso seleccionado
    const selected = e.target.value;

    setSelectVisible(false);
    const selectedCourses =
      getValues(`items[${index}].cursosDisponibles`) || [];
    selectedCourses.push(selected);
    setValue(`items[${index}].cursosDisponibles`, selectedCourses);
    // a qui se agrega a la array  el curso seleccionado
    setSelectedCursos([...selectedCursos, selected]);
    // a qui creamos una nueva array sin el cuso seleccionado

    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso !== selected
    );
    setCursosDisponibles(cursosRestantes);
  };
  // Agregar primer input
  const appendAgregar = () => {
    const existingEmptyItem = getValues("items").find((item) => !item.items);
    // console.log(existingEmptyItem);
    if (!existingEmptyItem) {
      append({ items: "" });
    }
    setSelectVisible(true);
  };
  const handleSelect2Change = (value, index) => {
    const carreraSeleccionada = value;
    const newSelectedHours = { ...cursoSelect };
    newSelectedHours[index] = carreraSeleccionada;
    setCursoSelect(newSelectedHours);
    console.log(carreraSeleccionada);
    console.log("este es el evento");
    // alert("hola");
  };
  const onSubmit = (data) => {
    console.log(data);
    reset();
    // setSelectedCursos([""]);
  };

  return (
    <div
      className="border"
      style={{
        width: "100%",
        background: "#F5F5F5",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre </label>
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
              <div>
                <Input {...field} placeholder="Nombre" />
                {fieldState.invalid && (
                  <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          />
          <label>Apellidos</label>
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
          <label>Correo</label>
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
        <div style={{ width: "100%" }}>
          {selectedCursos.map((cursoSelect, index) => (
            <div key={index} style={{ display: "flex", width: "100%" }}>
              {/* Se muestran los cursos seleccionados */}
              <p>
                {cursoSelect}

                <Button
                  onClick={() => {
                    const cursoEliminado = selectedCursos[index];
                    console.log(cursoEliminado);
                    const cursoFil = selectedCursos.filter(
                      (c, i) => i !== index
                    );
                    remove(index);
                    setSelectedCursos(cursoFil);
                    setCursosDisponibles([
                      ...cursosDisponibles,
                      cursoEliminado,
                    ]);
                    // reset()
                  }}
                >
                  <DeleteFilled
                    style={{ fontSize: "14px", color: "#b91010cc" }}
                  />
                </Button>
              </p>
            </div>
          ))}
        </div>

        {fields.map((item, index) => (
          <div key={item.id}>
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
                  {selectVisible && (
                    <div style={{ display: "flex" }}>
                      <select
                        multiple={false}
                        {...field}
                        style={{ width: "100%" }}
                        onChange={(e) => {
                          handleSelectChange(e, index);
                        }}
                      >
                        <option value="">Seleccione un cursos</option>
                        {cursosDisponibles.map((curso, index) => (
                          <>
                            {/*  input con las carrera */}
                            <option key={index} value={curso}>
                              {curso}
                            </option>
                          </>
                        ))}
                      </select>
                      <Button
                        red
                        onClick={(index) => {
                          remove(index);
                        }}
                      >
                        <DeleteFilled
                          style={{ fontSize: "20px", color: "#b91010cc" }}
                        />
                      </Button>
                    </div>
                  )}

                  {fieldState.invalid && (
                    <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        ))}

        {selectedCursos.length === 5 ? (
          "No hay más carreras"
        ) : (
          <div
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          >
            <Button type="button" onClick={appendAgregar}>
              Seleccionar cursos
            </Button>
          </div>
        )}
        {fields2.map((field2, index) => (
          <div key={field2.id}>
            <div>
              <Controller
                name={`items2.${index}.corsos`}
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field2}
                      style={{ width: "100%" }}
                      value={selectedCursos}
                      onChange={(value) => {
                        handleSelect2Change(value, index);
                      }}
                    >
                      {selectedCursos.map((curso2, index2) => (
                        <Select.Option key={index2} value={curso2}>
                          {curso2}
                        </Select.Option>
                      ))}
                    </Select>
                  </>
                )}
              />
              <Controller
                name={`items2[${index}].hours`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <div>
                      <InputNumber
                        {...field}
                        placeholder="Horas"
                        onChange={(value) => {
                          field.onChange(value);
                          // Aquí puedes realizar cualquier lógica adicional con el valor
                          // por ejemplo, actualizar el estado o mostrar la información fuera del campo
                          // En este ejemplo, lo mostramos fuera del campo
                          setNumeroSelect({
                            ...numeroSelect,
                            [index]: value,
                          });
                        }}
                      />
                    </div>
                    {cursoSelect[index]}  {numeroSelect[index]}  horas <button>guardar</button>
                    {/* {cursoSelect[index] ? (
                      <div>
                       
                        horas
                      </div>
                    ) : null} */}
                  </div>
                )}
              />

              <button type="button" onClick={() => remove2(index)}>
                Remove
              </button>

              <hr></hr>
              {/* {selectedCursos && (
                <Controller
                  control={control}
                  name={`horas${selectedCursos}`}
                  render={({ field }) => (
                    <Form.Item label={`Horas de `}>
                      {selectedCursos.map((selected, index) => (
                        <div key={index}>
                          {selected} <InputNumber />
                        </div>
                      ))}
                    </Form.Item>
                  )}
                />
              )} */}
            </div>
          </div>
        ))}
        <button type="button" onClick={() => append({})}>
          cursossssss
        </button>

        {selectedCursos.length === 5 ? (
          "No hay más carreras"
        ) : (
          <div
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          >
            <Button
              type="button"
              onClick={() => append2({ subject: "", hours: 0 })}
            >
              Seleccionar horario
            </Button>
          </div>
        )}
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={selectedCursos.length === 0}
          >
            Submit
          </Button>
        </Form.Item>
      </form>
    </div>
  );
};
