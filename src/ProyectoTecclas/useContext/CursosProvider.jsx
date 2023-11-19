import React, { createContext, useContext, useState } from "react";
import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
const MateriasContext = createContext();
export const CursosProvider = ({ children }) => {
  const nombresDeCursos = [
    { id: uuidv4(), name: "Informática" },
    { id: uuidv4(), name: "Matemáticas" },
    { id: uuidv4(), name: "Administración" },
    { id: uuidv4(), name: "Estadísticas" },
    { id: uuidv4(), name: "Ingles" },
  ];

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
  //
  //

  // Donde van los curso para controlar
  // const [cursos, setCursos] = useState(nombresDeCursos);
  const [cursosDisponibles, setCursosDisponibles] = useState(nombresDeCursos);
  const [selectedCursos, setSelectedCursos] = useState([]);
  const [selectVisible, setSelectVisible] = useState(false);
  const [desactivarSubmit, setDesactivarSubmit] = useState();
  const [showAgregarHorario, setShowAgregarHorario] = useState(false);
  const [showAppend, setShowAppend] = useState(false);

  const [copiaSelectedCursos, setCopiaSelectedCursos] = useState([]);

  const handleSelectChange = (value, index) => {
    const selectedCurso = cursosDisponibles.find(
      (curso) => curso.name === value
    );
    const selected = value;
    console.log(selected, "selected");
    console.log(selectedCurso, "selectedCurso");
    setSelectedCursos([...selectedCursos, selectedCurso.name]);

    const cursosRestantes = cursosDisponibles.filter(
      (curso) => curso.name !== value
    );
    setCursosDisponibles(cursosRestantes);
  };
  //
  //
  //
  const handleSelectRemoval = (cursoSelect) => {
    // const cursoFil = selectedCursos.filter((c) => c !== cursoSelect);
    const updatedCursos = selectedCursos.filter(
      (curso) => curso !== cursoSelect
    );
    setSelectedCursos(updatedCursos);
    setCursosDisponibles([
      ...cursosDisponibles,
      { id: uuidv4(), name: cursoSelect },
    ]);

    console.log(updatedCursos, "updatedCursos");
    console.log(cursosDisponibles);
    console.log(cursoSelect, "cursoSeled...........");
    // Filtrar el curso que coincide con el nombre
  };

  const agregarCursos = (nombre) => {
    const nuevaMateria = {
      id: uuidv4(),
      name: nombre,
    };
    setCursosDisponibles([...cursosDisponibles, nuevaMateria]);
  };

  const contextTodosHookLogica = {
    // hook
    selectedCursos,
    setSelectedCursos,

    cursosDisponibles,
    setCursosDisponibles,
    selectVisible,
    setSelectVisible,

    // funciones
    agregarCursos,
    // appendAgregar,
    handleSelectRemoval,
    handleSelectChange,
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
