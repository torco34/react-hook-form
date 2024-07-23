import React, { createContext, useContext, useState } from "react";

import {
  dataNameCourses,
  dataNameTeachers,
  dataTimes,
} from "../server/DataApi";
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

  // sesión de logeo con rutas protegidas y dos headers 20/07/24
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Puedes guardar información del usuario aquí
  const [user, setUser] = useState(null);
  const login = (userInfo) => {
    setIsAuthenticated(false);
    setUser(userInfo);
    // alert('Login')
  };
  const logout = () => {
    setIsAuthenticated(true);
    setUser(null);
  };
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
  const [getDataInforma, setGetDataInforma] = useState([]);
  const [show, setShow] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showIconsCrud, setShowIconsCrud] = useState(false);
  const [dataTeacher, setDataTeacher] = useState([]);
  // HOOK Y FUNCIÓN DE CREDENCIALES
  const [isRegistration, setIsRegistration] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOnRegistro = () => {
    setIsRegistration(!isRegistration);
  };
  //
  const handleFormulario = () => {
    setShowHome(true);
    setShow(false);
    setShowText(false);
  };
  const handleHomePage = () => {
    setShow(true);
    setShowHome(false);
    setShowText(false);
  };

  const handleShowText = () => {
    setShowText(true);
    setShowHome(false);
    setShow(false);
  
  };
  const contextAllHooks = {
    // SECCIÓN DE  AUTENTICACIÓN LÓGICA EN EL HEADER
    isAuthenticated,
    login,
    logout,
    user,
    // SECCIÓN DE CARD CREADA
    // HOOK DE CREDENTIAL FORM
    isRegistration,
    setIsRegistration,
    loading,
    setLoading,
    handleOnRegistro,
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
    // HOOK CARD CREADA
    showIconsCrud,
    setShowIconsCrud,
    setDataTeacher,
    dataTeacher,
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
    getDataInforma,
    setGetDataInforma,
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
