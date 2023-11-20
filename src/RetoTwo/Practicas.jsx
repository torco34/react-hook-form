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

// import React, { useState } from 'react';

// const YourComponent = () => {
//   const [selectedCursos, setSelectedCursos] = useState([]);
//   const [copiaSelectedCursos, setCopiaSelectedCursos] = useState([]);
//   const [cursosDisponibles, setCursosDisponibles] = useState([]);
//   const [guardarResultdos, setGuardarResultdos] = useState([]);

//   const handleSelectChange = (value, index) => {
//     const selectedCurso = cursosDisponibles.find((curso) => curso.name === value);

//     // Check if the curso is not already in copiaSelectedCursos
//     if (!copiaSelectedCursos.includes(selectedCurso.name)) {
//       setCopiaSelectedCursos([...copiaSelectedCursos, selectedCurso.name]);
//     }

//     setSelectedCursos([...selectedCursos, selectedCurso.name]);

//     const cursosRestantes = cursosDisponibles.filter((curso) => curso.name !== value);
//     setCursosDisponibles(cursosRestantes);
//   };

//   const handleSelect2Change = (value) => {
//     const select2Valor = value;

//     // Check if the value is not already in guardarResultdos
//     if (!guardarResultdos.includes(select2Valor)) {
//       setGuardarResultdos([...guardarResultdos, select2Valor]);
//     }

//     const updatedSelectedCursos = copiaSelectedCursos.filter(
//       (element) => element !== select2Valor
//     );

//     setCopiaSelectedCursos(updatedSelectedCursos);
//   };

//   // Assuming cursosDisponibles is initially set with all available options
//   // and guardarResultdos contains already selected options in the second select
//   const cursosDisponiblesFiltrados = cursosDisponibles.filter(
//     (curso) => !guardarResultdos.includes(curso.name)
//   );

//   return (
//     <div>
//       <select onChange={(e) => handleSelectChange(e.target.value)}>
//         {cursosDisponiblesFiltrados.map((curso) => (
//           <option key={curso.name} value={curso.name}>
//             {curso.name}
//           </option>
//         ))}
//       </select>

//       <select onChange={(e) => handleSelect2Change(e.target.value)}>
//         {copiaSelectedCursos.map((curso) => (
//           <option key={curso} value={curso}>
//             {curso}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default YourComponent;


