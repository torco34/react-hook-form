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
    console.log(
      estaSeleccionado,
      elementosSeleccionados,
      "elementos Seleccionado",
      "estaSeleccionado"
    );
    console.log(elemento, "elemento la variable");
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

const handleSelectRemoval = (cursoSelect) => {
  // Filtrar el curso seleccionado del primer selector
  const updatedCursos = selectedCursos.filter((curso) => curso !== cursoSelect);
  setSelectedCursos(updatedCursos);

  // Devolver el curso al segundo selector
  const selectedCurso = cursosDisponibles.find((curso) => curso.name === cursoSelect);
  setCursosDisponibles([...cursosDisponibles, { id: uuidv4(), name: cursoSelect }]);

  // Filtrar el curso seleccionado del segundo selector (copia)
  const updatedCopiaSelectedCursos = copiaSelectedCursos.filter((curso) => curso.name !== cursoSelect);
  setCopiaSelectedCursos(updatedCopiaSelectedCursos);

  console.log(updatedCursos, "updatedCursos");
  console.log(cursosDisponibles, "cursosDisponibles");
  console.log(updatedCopiaSelectedCursos, "copia select");
  console.log(copiaSelectedCursos, "copiaSelectedCursos");
};

const handleSelect2Change = (value) => {
  const select2Valor = value;

  // Filtrar el curso seleccionado del segundo selector (copia)
  const updatedSelectedCursos = copiaSelectedCursos.filter((element) => element.name !== select2Valor);
  console.log(updatedSelectedCursos, "resultado del filtro");

  setCopiaSelectedCursos(updatedSelectedCursos);
};

const handleSelectChange = (value, index) => {
  const selectedCurso = cursosDisponibles.find((curso) => curso.name === value);

  // Copiar el objeto completo al segundo selector
  setCopiaSelectedCursos([...copiaSelectedCursos, selectedCurso]);

  console.log(copiaSelectedCursos, "copiaSelectedCursos..");
  console.log(selectedCurso, "selectedCurso ....");

  // Agregar el nombre al primer selector
  setSelectedCursos([...selectedCursos, selectedCurso.name]);

  // Filtrar el curso seleccionado del primer selector
  const cursosRestantes = cursosDisponibles.filter((curso) => curso.name !== value);
  setCursosDisponibles(cursosRestantes);
};

