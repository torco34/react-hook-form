import React, { createContext, useContext, useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
const MateriasContext = createContext();

const nombresDeCursos = [
  { id: uuidv4(), name: "Informática" },
  { id: uuidv4(), name: "Matemáticas" },
  { id: uuidv4(), name: "Administración" },
  { id: uuidv4(), name: "Estadísticas" },
  { id: uuidv4(), name: "Ingles" },
];
export const CursosProvider = ({ children }) => {
  console.log(nombresDeCursos);

  //
  //

  // Donde van los curso para controlar
  // const [cursos, setCursos] = useState(nombresDeCursos);
  const [cursosDisponibles, setCursosDisponibles] = useState(nombresDeCursos);
  const [selectedCursos, setSelectedCursos] = useState([]);
  const [setSelectVisible, selectVisible] = useState(false);
  const [selectAppend1Booleano, setSelectAppend1Booleano] = useState(false);
  const [desactivarSubmit, setDesactivarSubmit] = useState(true);
  const [showAppendCursos, setShowAppendCursos] = useState(false);
  const [showAppend, setShowAppend] = useState(false);
  const [copiaSelectedCursos, setCopiaSelectedCursos] = useState([]);
  const [historyOnchange, setHistoryOnchange] = useState([]);
  const [showAgregarHorario, setShowAgregarHorario] = useState(false);
  const [deleteFieldsArray, setDeleteFieldsArray] = useState();
  const [showButton, setShowButton] = useState(false);

  const agregarCursos = (nombre) => {
    const nuevaMateria = {
      id: uuidv4(),
      name: nombre,
    };
    setCursosDisponibles([...cursosDisponibles, nuevaMateria]);
  };

  const contextTodosHookLogica = {
    // hook copia para mapear el segundo fields array
    setCopiaSelectedCursos,
    copiaSelectedCursos,
    // hook guarda  los curso seleccionados
    setSelectedCursos,
    selectedCursos,
    //  hook donde van la array de objeto
    setCursosDisponibles,
    cursosDisponibles,
    //  hook muestra   texto cuando ya no hay  curso seleccionado
    setSelectVisible,
    selectVisible,
    setSelectAppend1Booleano,
    selectAppend1Booleano,
    // hook 5
    setShowAppendCursos,

    showAppendCursos,
    // hook muestra el texto segundo  append
    setShowAppend,
    showAppend,
    // hook mostrar texto agregar horario
    setShowAgregarHorario,
    showAgregarHorario,
    // guardar historia  en onchei
    setHistoryOnchange,
    historyOnchange,
    //
    setDeleteFieldsArray,
    deleteFieldsArray,
    //  desactiva submit
    setDesactivarSubmit,
    desactivarSubmit,

    setShowButton,
    showButton,
  };
  return (
    <MateriasContext.Provider value={{ contextTodosHookLogica }}>
      {children}
    </MateriasContext.Provider>
  );
};
export function useMaterias() {
  return useContext(MateriasContext);
}
