import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { DeleteFilled } from "@ant-design/icons";

import { Alert, Button, Form, Input, InputNumber, Select } from "antd";

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
  const [desactivarSubmit, setDesactivarSubmit] = useState();
  const [showAgregarHorario, setShowAgregarHorario] = useState(true);
  const [showAppend, setShowAppend] = useState(false);
  const [copiaSelectedCursos, setCopiaSelectedCursos] = useState([]);
  console.log("copiaSelectedCursos", copiaSelectedCursos);
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

  // FUNCIÓN DEL PRIMER SELECT FIELD ARRAY
  // filtra para esconder
  const handleSelectChange = (value, index) => {
    // aquí selected capsula el curso seleccionado
    const selected = value;
    console.log(selected);
    setSelectVisible(false);
    const selectedCourses =
      getValues(`items[${index}].cursosDisponibles`) || [];
    console.log(selectedCourses, "sevalue");
    // selectedCourses.push(selected);
    setValue(`items[${index}].cursosDisponibles`, selectedCourses);
    // a qui se agrega a la array  el curso seleccionado
    setSelectedCursos([...selectedCursos, selected]);
    // a qui creamos una nueva array sin el cuso seleccionado
    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso !== selected
    );
    setCopiaSelectedCursos([...copiaSelectedCursos, selected]);
    setCursosDisponibles(cursosRestantes);
    // setShowAppend(false);
  };
  // remueve el curso seleccionado primer field Array
  const handleSelectRemoval = (index) => {
    const cursoEliminado = selectedCursos[index];
    const cursoFil = selectedCursos.filter((c, i) => i !== index);
    remove(index);
    setSelectedCursos(cursoFil);
    setCursosDisponibles([...cursosDisponibles, cursoEliminado]);
  };
  // Agregar el primer input
  const appendAgregar = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);
    console.log(elementoVacio, "elementovacio");
    if (!elementoVacio) {
      append({ items: "" });
      console.log("hola mundo");
    }
    setSelectVisible(true);
    // setShowAgregarHorario(true);
    // aun no sirve
    // setShowAppend(true);
  };

  // Guardar de nuevo los curso en el primer selector
  const handleGuardarClick = (index) => {
    remove2(index);
    // setSelectedCursos([""]);
  };

  // FUNCIÓN SEGUNDO SELECTOR FIELD ARRAY

  const handleSelect2Change = (value, index) => {
    const select2Valor = value;
    // console.log(selectedCursos, fields2, "select field2");
    // console.log(copiaSelectedCursos, index, "copia");

    const updatedSelectedCursos = copiaSelectedCursos.filter(
      (element) => element !== select2Valor
    );
    setCopiaSelectedCursos(updatedSelectedCursos);
    if (updatedSelectedCursos.length > 0) append2({ items2: "", hours: "" });
  };
  // append segundo field array
  const handleAppend2 = () => {
    append2({ items2: "" });

    // setShowAgregarHorario(true);
  };
  //  onchange del inputNumber segundo field array
  const handleDesactivarSubmit = (value, index) => {
    const valorInput = value;
    console.log(valorInput, "valor");
    if (index === 0) {
      setDesactivarSubmit(!!value);
    } else {
      // setDesactivarSubmit(true);
    }
    // setDesactivarSubmit(!!value);
    // setDesactivarSubmit(false);
    console.log(index, "index");
  };

  // activar el boton submit

  const onSubmit = (data) => {
    console.log(data);

    // reset();
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
        {selectedCursos.map((cursoSelect, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "200px",
              height: "30px",
              marginBottom: "8px",
            }}
          >
            {/* Se muestran los cursos seleccionados */}

            <p>{cursoSelect}</p>
            <Button onClick={() => handleSelectRemoval(index)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        ))}
        {fields.map((item, index) => (
          <div key={item.id} style={{}}>
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

                  <div style={{ width: "100%" }}></div>
                  {selectVisible && (
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
                        value={field.value}
                        onChange={(value) => {
                          field.onChange(value);
                          handleSelectChange(value, index);
                        }}
                      >
                        {cursosDisponibles.map((curso, index) => (
                          <Select.Option key={index} value={curso}>
                            {curso}
                          </Select.Option>
                        ))}
                      </Select>

                      <Button
                        onClick={() => {
                          remove(index);
                          // alert("HOLA MUNDO");
                          // setShowAppend(true);
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
          "No hay carreras "
        ) : (
          <div
            style={{
              marginTop: "20px",
              width: "100%",
            }}
          >
            {showAppend ? (
              <>
                <Button type="button" onClick={appendAgregar}>
                  Seleccionar cursos
                </Button>
              </>
            ) : null}
            <Button type="button" onClick={appendAgregar}>
              Seleccionar cursos
            </Button>
          </div>
        )}
        {fields2.map((field2, index) => (
          <div key={field2.id}>
            <div
              style={{
                display: "flex",
                width: "50%",
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
                      style={{ width: "40%" }}
                      // value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                        handleSelect2Change(value, index);
                      }}
                    >
                      {copiaSelectedCursos.map((curso2, cursoIndex) => (
                        <Select.Option key={cursoIndex} value={curso2}>
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
                        handleDesactivarSubmit(value, index);
                      }}
                    />
                  </div>
                )}
              />

              <Button onClick={() => handleGuardarClick(index)}>
                <DeleteFilled
                  style={{ fontSize: "14px", color: "#b91010cc" }}
                />
              </Button>
            </div>
          </div>
        ))}

        {copiaSelectedCursos.length === 0 ? null : (
          <>
            {showAgregarHorario ? (
              <>
                <Button type="button" onClick={handleAppend2}>
                  Agregar el horario
                </Button>
              </>
            ) : null}
          </>
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
