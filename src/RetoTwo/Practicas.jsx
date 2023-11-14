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
  const [elementosSeleccionados, setElementosSeleccionados] = useState([]);

  // Función para manejar la selección de un elemento
  const handleSeleccion = (elemento) => {
    // Verificar si el elemento ya está seleccionado
    const estaSeleccionado = elementosSeleccionados.includes(elemento);
    console.log(estaSeleccionado, "estaselecionado");
    console.log(elemento, "elemento 1");
    // Actualizar el estado en consecuencia
    if (estaSeleccionado) {
      // Si ya está seleccionado, quitarlo de la lista
      console.log("entro del if");
      setElementosSeleccionados(
        elementosSeleccionados.filter((item) => item !== elemento)
      );
      console.log(elementosSeleccionados, "elementosSeleccionados");
    } else {
      // Si no está seleccionado, agregarlo a la lista
      setElementosSeleccionados([...elementosSeleccionados, elemento]);
      console.log(elementosSeleccionados, "elementosSeleccionados ");
      console.log(elemento, " elemento");
    }
  };
  const [miLista, setMiLista] = useState([
    { id: 1, texto: "Elemento 1", visible: true },
    { id: 2, texto: "Elemento 2", visible: true },
    { id: 3, texto: "Elemento 3", visible: true },
  ]);

  const [elementosOcultos, setElementosOcultos] = useState([]);

  const ocultarElemento = (id) => {
    const nuevoEstado = miLista.map((elemento) =>
      elemento.id === id ? { ...elemento, visible: false } : elemento
    );

    const elementoOculto = miLista.find((elemento) => elemento.id === id);
    setElementosOcultos([...elementosOcultos, elementoOculto]);

    setMiLista(nuevoEstado);
  };

  const mostrarElementosOcultos = () => {
    setMiLista([...miLista, ...elementosOcultos]);
    setElementosOcultos([]);
  };
  return (
    <div>
      {/* Renderizar tus elementos, por ejemplo, un array de botones */}
      {cursos.map((elemento) => (
        <button
          key={elemento.id}
          onClick={() => handleSeleccion(elemento)}
          style={{
            backgroundColor: elementosSeleccionados.includes(elemento)
              ? "lightblue"
              : "white",
          }}
        >
          {elemento}
        </button>
      ))}

      {/* Puedes mostrar la lista de elementos seleccionados si es necesario */}
      <div>Elementos seleccionados: {elementosSeleccionados.join(", ")}</div>

      <div>
        <h1>Mi Lista</h1>
        <ul>
          {miLista
            .filter((elemento) => elemento.visible)
            .map((elemento) => (
              <li key={elemento.id}>
                {elemento.texto}
                <button onClick={() => ocultarElemento(elemento.id)}>
                  Ocultar
                </button>
              </li>
            ))}
        </ul>
        <button onClick={mostrarElementosOcultos}>
          Mostrar Elementos Ocultos
        </button>
      </div>
    </div>
  );
};

// ... (otras importaciones)
// ... (your existing imports)

export const Bor = () => {
  // ... (your existing state variables)

  const [isCourseSelected, setIsCourseSelected] = useState(false); // Add this state variable

  // ... (your existing code)

  // FUNCIÓN DEL PRIMER SELECT FIELD ARRAY
  // filtra para esconder
  const handleSelectChange = (value, index) => {
    // ... (your existing code)

    // Update the state variable when a course is selected
    setIsCourseSelected(true);

    // ... (your existing code)
  };

  // remueve el curso seleccionado primer field Array
  const handleSelectRemoval = (index) => {
    // ... (your existing code)

    // Update the state variable when a course is removed
    setIsCourseSelected(false);

    // ... (your existing code)
  };

  // ... (your existing code)

  // append segundo field array
  const handleAppend2 = () => {
    // ... (your existing code)

    // Update the state variable when a course is appended
    setIsCourseSelected(false);

    // ... (your existing code)
  };

  // ... (your existing code)

  // ... (Código anterior)

  // Sección del primer selector de cursos
  {
    fields.map((item, index) => (
      <div key={item.id}>
        <Controller
          name={`items[${index}].cursosDisponibles`}
          control={control}
          defaultValues=""
          rules={{
            required: selectVisible ? "Debe seleccionar una carrera" : false,
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
                <div style={{ display: "flex", width: "100%" }}>
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
                      style={{ fontSize: "16px", color: "#b91010" }}
                    />
                  </Button>
                </div>
              )}

              {fieldState.invalid && (
                <p style={{ color: "#b91010" }}>{fieldState.error?.message}</p>
              )}
            </div>
          )}
        />
      </div>
    ));
  }
};

// ... (Otras secciones del código)

// Sección del segundo selector de cursos
// ... (your existing code)


// ... (your existing code)



