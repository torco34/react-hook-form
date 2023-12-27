import React, { createContext, useContext, useState } from "react";
import {
  dataNameCourses,
  dataTimes,
  dataNameTeachers,
} from "../server/DataApi";
import { v4 as uuidv4 } from "uuid";
const HooksContext = createContext();

export const HooksAllProvider = ({ children }) => {
  // hooks de la api
  const [dataNameCourse, setDataNameCourse] = useState(dataNameCourses);
  const [dataNameTeacher, setDataNameTeacher] = useState(dataNameTeachers);
  const [dataNameTime, setDataNameTime] = useState(dataTimes);
  //
  //LOS QUE VAN PARA EL COMPONENTE  DEL PROFESOR "FieldsTeacher"

  // guarda los curso seleccionado para agregar un profesor
  const [courseSelectedForTeacher, setCourseSelectedForTeacher] = useState([]);
  // guarda nombre del profesor seleccionado
  const [selectedName, setSelectedName] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);

  //
  const [selectedCursos, setSelectedCursos] = useState([]);
  const [setSelectVisible, selectVisible] = useState([]);
  const [selectAppend1Booleano, setSelectAppend1Booleano] = useState(false);
  const [desactivarSubmit, setDesactivarSubmit] = useState(true);
  const [showAppendCursos, setShowAppendCursos] = useState(false);
  const [showAppend, setShowAppend] = useState(false);
  const [copiaSelectedCursos, setCopiaSelectedCursos] = useState([]);
  const [historyOnchange, setHistoryOnchange] = useState([]);
  const [showAgregarHorario, setShowAgregarHorario] = useState(false);
  const [deleteFieldsArray, setDeleteFieldsArray] = useState();
  const [showButton, setShowButton] = useState(false);

  // HOOKS DE  PROFESOR

  // compartir estado
  const [fieldArrayData, setFieldArrayData] = useState([]);
  // data de profesor

  const [cantidadNombresPorCurso, setCantidadNombresPorCurso] = useState([]);
  // data de jornada

  // const [cursoDeProfesor, setCursoDeProfesor] = useState([]);
  const [nombreProfesor, setNombreProfesor] = useState([]);
  // filtrado de profesor
  const [seleccionadosName, setSeleccionadosName] = useState([]);
  const agregarCursos = (nombre) => {
    const nuevaMateria = {
      id: uuidv4(),
      name: nombre,
    };
    setCursosDisponibles([...cursosDisponibles, nuevaMateria]);
  };

  const contextAllHooks = {
    //HOOK DE SERVICIO DE API
    setDataNameCourse,
    dataNameCourse,

    setDataNameTeacher,
    dataNameTeacher,

    setDataNameTime,
    dataNameTime,

    // HOOK DEL COMPONENTE fieldTeacher
    courseSelectedForTeacher,
    setCourseSelectedForTeacher,

    // nombre del profe
    selectedName,
    setSelectedName,
    
    // jornada tarde o manana
    selectedTime,
    setSelectedTime,

    // hook copia para mapear el segundo fields array
    setCopiaSelectedCursos,
    copiaSelectedCursos,
    // hook guarda  los curso seleccionados
    setSelectedCursos,
    selectedCursos,
    //  hook donde van la array de objeto

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
    // HOOKS PROFESOR

    // jornada

    // compartir estados
    setFieldArrayData,
    fieldArrayData,

    cantidadNombresPorCurso,
    setCantidadNombresPorCurso,
    setNombreProfesor,
    nombreProfesor,
    // nombres de profesores filtrados
    seleccionadosName,
    setSeleccionadosName,
  };
  return (
    <HooksContext.Provider value={{ contextAllHooks }}>
      {children}
    </HooksContext.Provider>
  );
};
export function useHookCourse() {
  return useContext(HooksContext);
}
