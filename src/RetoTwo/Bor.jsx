import React, { useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
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
  const title = useWatch({ name: "title", control });
  // FUNCIÓN DEL PRIMER SELECT FIELD ARRAY
  // filtra para esconder
  const handleSelectChange = (value, index) => {
    // aquí selected capsula el curso seleccionado
    const selected = value;

    //  se esta copiando, para el segundo selector
    setSelectVisible(false);
    setCopiaSelectedCursos([...copiaSelectedCursos, selected]);
    const selectedCourses =
      getValues(`items[${index}].cursosDisponibles`) || [];

    setValue(`items[${index}].cursosDisponibles`, selectedCourses);
    // a qui se agrega a la array  el curso seleccionado
    setSelectedCursos([...selectedCursos, selected]);
    // a qui creamos una nueva array sin el cuso seleccionado
    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso !== selected
    );
    // setCopiaSelectedCursos([...copiaSelectedCursos, selected]);
    setCursosDisponibles(cursosRestantes);
    setShowAppend(false);
  };
  // remueve el curso seleccionado primer field Array
  const handleSelectRemoval = (index) => {
    const cursoEliminado = selectedCursos[index];
    const cursoFil = selectedCursos.filter((c, i) => i !== index);
    remove(index);
    setSelectedCursos(cursoFil);
    setCursosDisponibles([...cursosDisponibles, cursoEliminado]);
    setShowButton(false);
    remove2(index);
    setCopiaSelectedCursos(cursoFil);
    // setCopiaSelectedCursos([]);
    console.log("este es mi remov");
  };
  // Agregar el primer input
  const appendAgregar = () => {
    const elementoVacio = getValues("items").find((item) => !item.items);
    console.log("agregar append");
    if (!elementoVacio) {
      append({ items: "" });
    }
    setSelectVisible(true);
    setShowAgregarHorario(true);
    // esconde boton seleccionar curso
    setShowAppend(true);
    setShowButton(false);
  };

  // Guardar de nuevo los curso en el primer selector
  const [showButton, setShowButton] = useState(false);
  const [historia, setHistoria] = useState([]);

  const [elementosDesaparecidos, setElementosDesaparecidos] = useState([]);

  const [removedElement, setRemovedElement] = useState(null);

  const showButtons = copiaSelectedCursos.length > 0 || showButton;

  const handleGuardarClick = (index) => {
    remove2(index);

    remove(index);
    setShowAgregarHorario(true);
    setShowButton(true);

    const removedElements = [selectedCursos[index], copiaSelectedCursos[index]];
    console.log(removedElements, "que");
    console.log(copiaSelectedCursos[index], "que index");
    if (removedElements.length === 2) {
      const uniqueRemovedElements = Array.from(new Set(removedElements));
      console.log(uniqueRemovedElements);
      const filteredRemovedElements = uniqueRemovedElements.filter(
        (element) => !copiaSelectedCursos.includes(element)
      );
      // Recupera los elementos eliminados
      console.log(filteredRemovedElements, "remove eliminar");
      setCopiaSelectedCursos([
        ...copiaSelectedCursos,
        ...filteredRemovedElements,
      ]);
      console.log(copiaSelectedCursos, "filtered nombre ultimo");
    }
  };

  // FUNCIÓN SEGUNDO SELECTOR FIELD ARRAY

  const handleSelect2Change = (value) => {
    const select2Valor = value;

    if (removedElement && removedElement === select2Valor) {
      setHistoria((prevHistoria) => [...prevHistoria, removedElement]);
      setRemovedElement(null);
    }

    const copiaHistoria = copiaSelectedCursos.filter(
      (element) => element === select2Valor
    );

    setHistoria(copiaHistoria);

    const updatedSelectedCursos = copiaSelectedCursos.filter(
      (element) => element !== select2Valor
    );

    setElementosDesaparecidos((prevElementos) => [
      ...prevElementos,
      select2Valor,
    ]);
    setCopiaSelectedCursos(updatedSelectedCursos);

    if (updatedSelectedCursos.length > 0) {
      append2({ items2: "", hours: "" });
      setShowAgregarHorario(false);
      setShowButton(false);
    }

    setShowButton(false);
    setShowAgregarHorario(false);
  };
  // append segundo field array
  const handleAppend2 = () => {
    append2({ items2: "", hours: "" });
    // aquí la lógica de recuperar los eliminados

    if (fields2.length === 0) {
      setCopiaSelectedCursos(selectedCursos);
      // setShowAgregarHorario(true);
    }
    console.log(selectedCursos);
    //  Muestra el text de select  "agregar horario"

    setShowButton(false);
    console.log(showAgregarHorario, "hola");
    //  Para que el submit no se active
    setDesactivarSubmit(false);
    console.log("append2 donde se llena");
  };
  //  onchange del inputNumber segundo field array
  const handleDesactivarSubmit = (value, index) => {
    const valorInput = value;

    if (index === 0) {
      setDesactivarSubmit(!!value);
      // setDesactivarSubmit(true);
    } else {
      setDesactivarSubmit(true);
    }
    // setDesactivarSubmit(!!value);
    console.log(index);
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
        <br />
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

                          setShowAppend(false);
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
          <>
            <p>No hay carreras </p>
          </>
        ) : (
          <div
            style={{
              marginTop: "20px",
              width: "100%",
              paddingBottom: "20px",
            }}
          >
            {showAppend ? null : (
              <>
                <Button type="button" onClick={appendAgregar}>
                  Seleccionar cursos
                </Button>
              </>
            )}
          </div>
        )}
        {fields2.map((field2, index) => (
          <div key={field2.id}>
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
                      // value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                        handleSelect2Change(value, index);
                      }}

                      // disabled={bloqueSelect}
                    >
                      {copiaSelectedCursos.map((curso2) => (
                        <Select.Option key={curso2} value={curso2}>
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
                  style={{ fontSize: "16px", color: "#b91010cc" }}
                />
              </Button>
            </div>
          </div>
        ))}

        <div>
          {copiaSelectedCursos.length === 0 || !showAgregarHorario ? null : (
            <Button type="button" onClick={handleAppend2}>
              Agregar el horario
            </Button>
          )}
        </div>

        <br></br>
        {}
        <div>
          <Form.Item wrapperCol={{ offset: 10, span: 1 }}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={fields2.length === 0 || !desactivarSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </form>
    </div>
  );
};
