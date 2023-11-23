import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Input, InputNumber, Select } from "antd";
import { useMaterias } from "../ProyectoTecclas/useContext/CursosProvider";
import "../ProyectoTecclas/css/styles.css";
import { v4 as uuidv4 } from "uuid";

export const Practicas = () => {
  const { control, handleSubmit, setValue, register, watch } = useForm({
    defaultValues: {
      items: [],
      items2: [],
    },
  });

  const {
    fields: fieldsCursos,
    append: appendCursos,
    remove: removeCursos,
  } = useFieldArray({
    control,
    name: "items",
  });

  const {
    fields: fieldsHorarios,
    append: appendHorarios,
    remove: removeHorarios,
  } = useFieldArray({
    control,
    name: "items2",
  });

  const { contextTodosHookLogica } = useMaterias();
  const {
    cursosDisponibles,
    selectedCursos,
    setCopiaSelectedCursos,
    copiaSelectedCursos,
    setShowAppend,
  } = contextTodosHookLogica;

  const handleSelectChange = (value, index) => {
    const selectedCurso = cursosDisponibles.find(
      (curso) => curso.name === value
    );

    setCopiaSelectedCursos([...copiaSelectedCursos, selectedCurso]);
    setShowAppend(true);

    removeCursos(index);
  };

  const handleSelectRemove = (cursoSelect, index) => {
    const restanteCurso = selectedCursos.filter(
      (curso) => curso !== cursoSelect
    );
    setCopiaSelectedCursos(restanteCurso);

    appendCursos({});

    removeCursos(index);
  };

  const handleAppend2 = (index) => {
    appendHorarios({});

    setShowAppend(false);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        {/* ... other input fields ... */}

        {selectedCursos.map((cursoSelect, index) => (
          <div key={index} className="cursoSelect">
            <p>{cursoSelect.name}</p>
            <Button onClick={() => handleSelectRemove(cursoSelect, index)}>
              <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
            </Button>
          </div>
        ))}

        {fieldsCursos.map((field, index) => (
          <div key={field.id} className="containerFields">
            <Controller
              name={`items[${index}].cursosDisponibles`}
              control={control}
              render={({ field }) => (
                <div
                  style={{
                    display: "flex",
                    width: "80%",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <Select
                    {...field}
                    style={{ width: "60%" }}
                    onChange={(value) => {
                      field.onChange(value);
                      handleSelectChange(value, index);
                    }}
                  >
                    {cursosDisponibles.map((curso) => (
                      <Select.Option key={curso.id} value={curso.name}>
                        {curso.name}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              )}
            />
          </div>
        ))}

        {fieldsHorarios.map((field, index) => (
          <div key={index} className="containerField2">
            <Controller
              name={`items2[${index}].horas`}
              control={control}
              render={({ field }) => (
                <div>
                  <InputNumber
                    {...field}
                    placeholder="Horas"
                    onChange={(value) => field.onChange(value)}
                  />
                </div>
              )}
            />

            <Button onClick={() => handleAppend2(index)}>
              <DeleteFilled style={{ fontSize: "16px", color: "#b91010cc" }} />
            </Button>
          </div>
        ))}

        <div>
          {copiaSelectedCursos.length === 0 ? null : (
            <Button type="button" onClick={() => appendCursos({})}>
              Seleccionar cursos
            </Button>
          )}
        </div>

        <div>
          {copiaSelectedCursos.length === 0 ||
          fieldsHorarios.length === 0 ? null : (
            <Button
              type="button"
              onClick={() => handleAppend2(fieldsHorarios.length)}
            >
              Agregar el horario
            </Button>
          )}
        </div>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

// import React, { useState } from "react";
// import { useForm, Controller, useFieldArray } from "react-hook-form";
// import "./css/Style.css";
// import { DeleteFilled } from "@ant-design/icons";
// import {
//   Button,
//   Cascader,
//   Checkbox,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Slider,
//   Switch,
//   TreeSelect,
//   Upload,
// } from "antd";
// const cursos = [
//   "Ingles",
//   "Informática",
//   "Matemáticas",
//   "Administración",
//   "Estadísticas",
// ];
// export const Practicas = () => {
//   const [elementosSeleccionados, setElementosSeleccionados] = useState([]);

//   // Función para manejar la selección de un elemento
//   const handleSeleccion = (elemento) => {
//     // Verificar si el elemento ya está seleccionado
//     const estaSeleccionado = elementosSeleccionados.includes(elemento);
//     console.log(estaSeleccionado);
//     console.log(elemento, "elemento la variable");
//     // Actualizar el estado en consecuencia
//     if (estaSeleccionado) {
//       // Si ya está seleccionado, quitarlo de la lista
//       console.log("entro del if");
//       setElementosSeleccionados(
//         elementosSeleccionados.filter((item) => item !== elemento)
//       );
//       console.log(elementosSeleccionados, "elementosSeleccionados");
//     } else {
//       // Si no está seleccionado, agregarlo a la lista
//       setElementosSeleccionados([...elementosSeleccionados, elemento]);
//       console.log(elementosSeleccionados, "elementosSeleccionados ");
//       console.log(elemento, " elemento");
//     }
//   };
//   const [miLista, setMiLista] = useState([
//     { id: 1, texto: "Elemento 1", visible: true },
//     { id: 2, texto: "Elemento 2", visible: true },
//     { id: 3, texto: "Elemento 3", visible: true },
//   ]);

//   const [elementosOcultos, setElementosOcultos] = useState([]);

//   const ocultarElemento = (id) => {
//     const nuevoEstado = miLista.map((elemento) =>
//       elemento.id === id ? { ...elemento, visible: false } : elemento
//     );

//     const elementoOculto = miLista.find((elemento) => elemento.id === id);
//     setElementosOcultos([...elementosOcultos, elementoOculto]);

//     setMiLista(nuevoEstado);
//   };

//   const mostrarElementosOcultos = () => {
//     setMiLista([...miLista, ...elementosOcultos]);
//     setElementosOcultos([]);
//   };
//   return (
//     <div>
//       {/* Renderizar tus elementos, por ejemplo, un array de botones */}
//       {cursos.map((elemento) => (
//         <button
//           key={elemento.id}
//           onClick={() => handleSeleccion(elemento)}
//           style={{
//             backgroundColor: elementosSeleccionados.includes(elemento)
//               ? "lightblue"
//               : "white",
//           }}
//         >
//           {elemento}
//         </button>
//       ))}

//       {/* Puedes mostrar la lista de elementos seleccionados si es necesario */}
//       <div>Elementos seleccionados: {elementosSeleccionados.join(", ")}</div>

//       <div>
//         <h1>Mi Lista</h1>
//         <ul>
//           {miLista
//             .filter((elemento) => elemento.visible)
//             .map((elemento) => (
//               <li key={elemento.id}>
//                 {elemento.texto}
//                 <button onClick={() => ocultarElemento(elemento.id)}>
//                   Ocultar
//                 </button>
//               </li>
//             ))}
//         </ul>
//         <button onClick={mostrarElementosOcultos}>
//           Mostrar Elementos Ocultos
//         </button>
//       </div>
//     </div>
//   );
// };

{
  /* <Select
  {...field}
  style={{ width: "100%" }}
  value={field.value}
  onChange={(value) => {
    field.onChange(value);
    handleSelect2Onchange(value, index);
  }}
  disabled={field.value !== ""} // Deshabilita si ya hay un valor seleccionado
>
  {/* opciones del select */
}
// </Select>; */}

// ... rest of your component code

// import React, { useState } from 'react';

// // Assuming this is a functional component
// const YourComponent = ({ fields2, control, copiaSelectedCursos, handleSelectRemove, remove }) => {
//   // State to store selected values
//   const [selectedValue, setSelectedValue] = useState('');

// import React from 'react';
// import { useForm, useFieldArray, Controller } from 'react-hook-form';
// import { Select, Input, Button } from 'antd';

// const YourFormComponent = () => {
//   const { control, handleSubmit, register, setValue } = useForm();
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'yourArrayName', // Replace with your actual array name
//   });

//   const handleSelect2Onchange = (value, index) => {
//     // Update the corresponding input value when the Select value changes
//     setValue(`yourArrayName[${index}].inputFieldName`, value);
//   };

//   const onSubmit = (data) => {
//     // Handle form submission
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           {/* Replace 'selectFieldName' and 'inputFieldName' with your actual field names */}
//           <Controller
//             control={control}
//             name={`yourArrayName[${index}].selectFieldName`}
//             defaultValue=""
//             render={({ field }) => (
//               <>
//                 <Select
//                   {...field}
//                   style={{ width: "60%" }}
//                   value={field.value}
//                   onChange={(value) => {
//                     field.onChange(value);
//                     handleSelect2Onchange(value, index);
//                   }}
//                 >
//                   {/* Your Select Options */}
//                 </Select>
//                 <Input
//                   style={{ marginTop: "10px" }}
//                   placeholder="Selected Value"
//                   value={field.value}
//                   onChange={(e) => setValue(`yourArrayName[${index}].inputFieldName`, e.target.value)}
//                 />
//                 <Button type="button" onClick={() => remove(index)}>
//                   Remove
//                 </Button>
//               </>
//             )}
//           />
//         </div>
//       ))}

//       <Button type="button" onClick={() => append({ selectFieldName: '', inputFieldName: '' })}>
//         Add
//       </Button>

//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default YourFormComponent;
//
// import { useForm } from 'react-hook-form';

// ...

// ...

// Luego, puedes llamar a la función deleteFields2 cuando necesites eliminar un campo
// deleteFields2(index);
