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
  // HOOK DE PAGES

  const [showAppend, setShowAppend] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showAgregarHorario, setShowAgregarHorario] = useState(false);
  const [showButtonTime, setShowButtonTime] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [copeSelectedCourse, setCopeSelectedCourse] = useState([]);
  const [historyOnchange, setHistoryOnchange] = useState([]);
  //
  const [setSelectVisible, selectVisible] = useState([]);
  const [selectAppend1Booleano, setSelectAppend1Booleano] = useState(false);
  const [desactivarSubmit, setDesactivarSubmit] = useState(true);
  const [showAppendCursos, setShowAppendCursos] = useState(false);
  const [nombreProfesor, setNombreProfesor] = useState([]);
  const [nameTeacher, setNameTeacher] = useState([]);
  const [deleteFieldsArray, setDeleteFieldsArray] = useState();
  //  HOOK DE PAGES  PERFIL

  const [show, setShow] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleFormulario = () => {
    setShowHome(true);
    setShow(false);
  };
  const handleHomePage = () => {
    setShow(true);
    setShowHome(false);
  };

  const handleShowText = () => {
    setShowText(true);
    console.log("hola mundo");
  };
  const contextAllHooks = {
    // FUNCIÓN DE PAGES PERFIL
    handleHomePage,
    handleFormulario,
    handleShowText,
    // HOOK DE PAGES PERFIL
    setShowHome,
    showHome,
    setShow,
    show,
    setShowText,
    showText,

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
    // HOOK DEL COMPONENTE pagesEnrollCourse
    // hook primer selector
    selectedCourse,
    setSelectedCourse,
    //  hook mostrar botones
    setShowAppend,
    showAppend,
    // boolean
    setShowButton,
    showButton,
    // hook copia para mapear el segundo fields array
    copeSelectedCourse,
    setCopeSelectedCourse,
    // hook guarda  los curso seleccionados
    setShowButtonTime,
    showButtonTime,
    // des
    setNameTeacher,
    nameTeacher,
    setShowAgregarHorario,
    showAgregarHorario,
    //  hook muestra   texto cuando ya no hay  curso seleccionado
    selectVisible,
    setSelectVisible,
    setSelectAppend1Booleano,
    selectAppend1Booleano,
    // hook 5
    setShowAppendCursos,
    showAppendCursos,
    // hook muestra el texto segundo  append
    // guardar historia  en onchei
    setHistoryOnchange,
    historyOnchange,
    //
    setDeleteFieldsArray,
    deleteFieldsArray,
    //  desactiva submit
    setDesactivarSubmit,
    desactivarSubmit,
    // HOOKS PROFESOR

    setNombreProfesor,
    nombreProfesor,
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
