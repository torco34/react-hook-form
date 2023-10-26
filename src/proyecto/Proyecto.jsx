import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
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
  const [selectedItems, setSelectedItems] = useState({});
  const [selectVisible, setSelectVisible] = useState(false);

  const { control, handleSubmit, register, getValues, reset, setValue } =
    useForm({
      defaultValues: {
        items: [],
      },
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const { remove: remove2 } = useFieldArray({
    control,
    name: "items2",
  });
  const handleSelectChange = (e, index) => {
    // a qui selected capsula el curso seleccionado
    const selected = e.target.value;

    setSelectVisible(false);

    // a qui se agrega a la array  el curso seleccionado
    setSelectedCursos([...selectedCursos, selected]);
    // a qui creamos una nueva array sin el cuso seleccionado
    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso !== selected
    );
    setCursosDisponibles(cursosRestantes);
 
  };
  const appendAgregar = () => {
    const existingEmptyItem = getValues("items").find((item) => !item.items);
    // console.log(existingEmptyItem);
    if (!existingEmptyItem) {
      append({ items: "" });
    }
    setSelectVisible(true);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: "100%" }}>
          <label>Nombre </label>
          <Controller
            name={"name"}
            control={control}
            defaultValue=""
            rules={{
              required: "Nombre es requerido",
              minLength: {
                value: 2,
                message: "Nombre debe tener al menos 2 caracteres",
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <Input {...field} />
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
              required: "Este campo es requerido",
              minLength: {
                value: 2,
                message: "Nombre debe tener al menos 2 caracteres",
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <Input {...field} />
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
              required: "Este campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Dirección de correo electrónico no válida",
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <Input {...field} />
                {fieldState.invalid && (
                  <p style={{ color: "red" }}>{fieldState.error?.message}</p>
                )}
              </div>
            )}
          />
        </div>

        {/* {show && <p>{show}</p>} */}
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
                  {selectVisible && (
                    <div style={{ display: "flex", width: "100%" }}>
                      <select
                        {...field}
                        // {...register(`items[${index}].cursosDisponibles`)}
                        style={{ width: "50%" }}
                        onChange={(e) => {
                          handleSelectChange(e, index);
                        }}
                      >
                        <option value="">Selecciona cursos..</option>
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
                        <DeleteFilled />
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
        <div>
          {selectedCursos.map((cursoSelect, index) => (
            <div style={{ display: "flex", width: "100%" }}>
              {/* Se muestran los cursos seleccionados */}
              <p>
                {cursoSelect}

                <Button
                  onClick={() => {
                    const cursoEliminado = selectedCursos[index];
                    console.log(cursoEliminado);
                    {
                      ("aquino");
                    }
                    const cursoFil = selectedCursos.filter(
                      (c, i) => i !== index
                    );
                    remove2(index);
                    setSelectedCursos(cursoFil);
                    setCursosDisponibles([
                      ...cursosDisponibles,
                      cursoEliminado,
                    ]);
                  }}
                >
                  <DeleteFilled />
                </Button>
              </p>
            </div>
          ))}
        </div>
        {selectedCursos.length === 5 ? (
          "No hay mas carreras"
        ) : (
          <div>
            <button type="button" onClick={appendAgregar}>
              Seleccionar curso
            </button>
          </div>
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </form>
    </div>
  );
};
