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
  //
  const [cursosDisponibles, setCursosDisponibles] = useState(cursos);
  const [selectVisible, setSelectVisible] = useState(false);
  const [carrerasEliminadas, setCarrerasEliminadas] = useState("");
  const [pasarValor, setPasarValor] = useState([]);
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
  const handleSelect2Change = (value) => {
    const carreraSeleccionada = value;
    setCarrerasEliminadas(...carrerasEliminadas, carreraSeleccionada);
    console.log(carreraSeleccionada, "el value");
    setSelectedCursos([...selectedCursos, carreraSeleccionada]);
    const cursoSinHora = selectedCursos.filter(
      (c) => c !== carreraSeleccionada
    );
    if (cursoSinHora.length > 0) {
      append2({ items2: "", hours: "" });
    }
    setSelectedCursos(cursoSinHora);
  };

  // guardar
  const handleGuardarClick = (index) => {
    const cursoEliminado = getValues(`items2[${index}].corsos`);
    console.log(cursoEliminado);
    // Remueve el curso de selectedCursos
    if (typeof cursoEliminado !== "undefined") {
      // Agrega el curso eliminado nuevamente a cursosDisponibles
      setCursosDisponibles([...cursosDisponibles, cursoEliminado]);

      // Remueve el curso de selectedCursos
      const nuevosCursos = [...selectedCursos];
      nuevosCursos.splice(index, 1);
      setSelectedCursos(nuevosCursos);
    }

    // Remueve el curso de selectedCursos
    remove2(index);
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
        <hr></hr>
        <div style={{ width: "100%" }}>
          {selectedCursos.map((cursoSelect, index) => (
            <div key={index.id} style={{ display: "flex", width: "100%" }}>
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
                    console.log(cursoFil, "cursofil");
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
            <div style={{ display: "flex", width: "100%", margin: "10px" }}>
              <Controller
                name={`items2.${index}.corsos`}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      style={{ width: "40%" }}
                      value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                        handleSelect2Change(value, index);
                      }}
                    >
                      {selectedCursos.map((curso2, index) => (
                        <Select.Option key={index} value={curso2}>
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
                    <InputNumber {...field} placeholder="Horas" />
                  </div>
                )}
              />

              <Button type="button" onClick={() => handleGuardarClick(index)}>
                <DeleteFilled
                  style={{ fontSize: "14px", color: "#b91010cc" }}
                />
              </Button>
            </div>
          </div>
        ))}

        <button type="button" onClick={() => append2({ items2: "" })}>
          Agregar horario
        </button>

        {selectedCursos.length === 5 ? (
          "No hay más carreras"
        ) : (
          <div
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          ></div>
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
