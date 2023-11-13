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
    console.log(elemento, "elemento 1")
    // Actualizar el estado en consecuencia
    if (estaSeleccionado) {
      // Si ya está seleccionado, quitarlo de la lista
      console.log("entro del if")
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
    </div>
  );
};
