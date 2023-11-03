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
export const Bor = () => {
  const [selectedCursos, setSelectedCursos] = useState([]);
  const [cursosDisponibles, setCursosDisponibles] = useState(cursos);
  const [selectVisible, setSelectVisible] = useState(false);
  const [desactivarSubmit, setDesactivarSubmit] = useState(0);
  const [showAgregarHorario, setShowAgregarHorario] = useState(true);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    setValue,
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

  const handleSelectChange = (e, index) => {
    // aquí selected capsula el curso seleccionado
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
    const elementoVacio = getValues("items").find((item) => !item.items);
    //  si elemento esta vació se agrega
    if (!elementoVacio) {
      append({ items: "" });
    }
    setSelectVisible(true);
    setShowAgregarHorario(true);
  };
  const handleSelect2Change = (value, index) => {};
  const handleAppend2 = () => {
    append2({ items2: "" });
    setShowAgregarHorario(false);
  };
  // remueve el curso seleccionado primer field Array
  const handleSelectRemoval = (index) => {
    const cursoEliminado = selectedCursos[index];
    console.log(cursoEliminado);
    const cursoFil = selectedCursos.filter((c, i) => i !== index);
    remove(index);
    setSelectedCursos(cursoFil);
    setCursosDisponibles([...cursosDisponibles, cursoEliminado]);
  };
  // deshabilitar el select de field2 array
  const handleDisabledSelect = (curso, field2, fields2) => {
    return fields2.some((f) => f.corsos === curso && f.id !== field2.id);
  };
  // Guardar de nuevo los curso en el primer selector
  const handleGuardarClick = (index) => {
    remove2(index);
  };
  // activar el boton submit

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
        <div style={{ width: "100%" }}>
          <p>
            {selectedCursos.map((cursoSelect, index) => (
              <div key={index.id} style={{ display: "flex", width: "100%" }}>
                {/* Se muestran los cursos seleccionados */}
                <p>
                  {cursoSelect}
                  <Button onClick={() => handleSelectRemoval(index)}>
                    <DeleteFilled
                      style={{ fontSize: "14px", color: "#b91010cc" }}
                    />
                    eliminar
                  </Button>
                </p>
              </div>
            ))}
          </p>
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
                        <option value="">Seleccionar cursos</option>
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
                          style={{ fontSize: "20px", color: "#b91010" }}
                        />
                        eliminar
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
          "No hay mas carreras para seleccionar"
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
                      {selectedCursos.map((curso2, cursoIndex) => (
                        <Select.Option
                          key={cursoIndex}
                          value={curso2}
                          disabled={handleDisabledSelect(
                            curso2,
                            field2,
                            fields2
                          )}
                        >
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
                        setDesactivarSubmit(!!value);
                      }}
                    />
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

        {selectedCursos.length === 0 ? null : (
          <Button type="button" onClick={handleAppend2}>
            Agregar horario a cada cursos
          </Button>
        )}

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={fields2.length === 0 || !desactivarSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </form>
    </div>
  );
};
