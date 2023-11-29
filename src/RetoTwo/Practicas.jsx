import { useState } from "react";

import {
  useForm,
  useFieldArray,
  Controller,
  useController,
} from "react-hook-form";
import {
  datosJornadas,
  datosProfesor,
  nombresDeCursos,
} from "../ProyectoTecclas/componentes/Datos";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
export const Practicas = () => {
  const profesores = ["juan", "miguel", "antonio"];
  const materias = ["Materia1", "Materia2", "Materia3"];
  const jornadas = ["Mañana", "Tarde"];

  const [selecciones, setSelecciones] = useState([]);
  const [profesoresDisponibles, setProfesoresDisponibles] =
    useState(profesores);

  const fillArray = (profesor, materia, jornada) => {
    const nuevaSeleccion = { profesor, materia, jornada };
    setSelecciones([...selecciones, nuevaSeleccion]);
  };

  const verificarDisponibilidad = () => {
    const nuevosProfesoresDisponibles = profesores.filter((profesor) => {
      // Verificar si el profesor ya tiene una materia en la jornada seleccionada

      return !selecciones.some(
        (seleccion) =>
          seleccion.profesor === profesor &&
          seleccion.jornada === seleccion.jornada
      );
    });
    setProfesoresDisponibles(nuevosProfesoresDisponibles);
  };

  return (
    <div>
      <h2>Primera Etapa</h2>
      <div>
        <label>Profesor:</label>
        <select onChange={(e) => fillArray(e.target.value, "", "")}>
          <option value="">Selecciona un profesor</option>
          {profesores.map((profesor) => (
            <option key={profesor} value={profesor}>
              {profesor}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Materia:</label>
        <select onChange={(e) => fillArray("", e.target.value, "")}>
          <option value="">Selecciona una materia</option>
          {materias.map((materia) => (
            <option key={materia} value={materia}>
              {materia}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Jornada:</label>
        <select onChange={(e) => fillArray("", "", e.target.value)}>
          <option value="">Selecciona una jornada</option>
          {jornadas.map((jornada) => (
            <option key={jornada} value={jornada}>
              {jornada}
            </option>
          ))}
        </select>
      </div>

      <button onClick={verificarDisponibilidad}>
        Verificar Disponibilidad
      </button>

      <h2>Profesores Disponibles</h2>
      <ul>
        {profesoresDisponibles.map((profesor) => (
          <li key={profesor}>{profesor}</li>
        ))}
      </ul>
      <NestedForm />
    </div>
  );
};

const NestedForm = () => {
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      sections: [
        {
          title: "Sección 2",
          elements: [{ name: "Elemento 1" }, { name: "Elemento 2222" }],
        },
        // {
        //   title: "Sección 12",
        //   elements: [{ name: "Elemento 3" }, { name: "Elemento 4" }],
        // },
      ],
    },
  });
  const importate = () => {
    // const filtroProfe = (element) => element.name !== value;
    // const seledProfe = cursosDisponibles.filter(filtroProfe);
    // console.log(seledProfe, "seledProfe");
    // setDatosDeProfesor(seledProfe);
  };

  const {
    fields: sections,
    append: appendSection,
    remove: removeSection,
  } = useFieldArray({
    control,
    name: "item",
  });

  const {
    fields: elementsFields,
    append: appendElement,
    remove: removeElement,
  } = useFieldArray({
    control,
    name: "sections",
  });
  const {
    fields: selectedProfesor,
    append: appendProfesor,
    remove: removeProfesor,
  } = useFieldArray({
    control,
    name: "itemsProfesor",
  });
  const {
    fields: selectedCursos,
    append: appendProCursos,
    remove: removeCursos,
  } = useFieldArray({
    control,
    name: "itemsProfesor",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Campos del array de secciones */}
      {sections.map((section, sectionIndex) => (
        <div key={section.id}>
          {/* Campos del array de elementos dentro de cada sección */}
          {elementsFields.map((element, index) => (
            <div key={element.id}>
              <Controller
                name={`item.${index}.jornada`}
                control={control}
                render={({ field }) => (
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>Jornada:</p>
                    <Select
                      {...field}
                      style={{ width: "50%" }}
                      value={field.jornada}
                    >
                      {datosJornadas.map((jornada, cursoIndex) => (
                        <Select.Option key={jornada.id} value={jornada.name}>
                          {jornada.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
              {/* <button type="button" onClick={() => removeElement(index)}>
                Eliminar dentro del segundo
              </button> */}
            </div>
          ))}
          {selectedProfesor.map((element, index) => (
            <div key={element.id}>
              <Controller
                name={`itemsProfesor.${index}.profesor`}
                control={control}
                render={({ field }) => (
                  <div style={{ width: "100%", display: "flex" }}>
                    <p>Profesor:</p>
                    <Select
                      {...field}
                      style={{ width: "50%" }}
                      value={field.profesor}
                    >
                      {datosProfesor.map((profesor, cursoIndex) => (
                        <Select.Option key={profesor.id} value={profesor.name}>
                          {profesor.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
              <button type="button" onClick={() => removeElement(elementIndex)}>
                Eliminar dentro del profe
              </button>
            </div>
          ))}
          {elementsFields.map((element, elementIndex) => (
            <div key={element.id}>
              <Controller
                control={control}
                name={`sections.${sectionIndex}.elements.${elementIndex}.name`}
                render={({ field }) => (
                  <input {...field} placeholder="una secion" />
                )}
              />
              <button type="button" onClick={() => removeElement(elementIndex)}>
                Eliminar dentro del segundo
              </button>
            </div>
          ))}
          <button type="button" onClick={() => appendElement({ name: "" })}>
            Agregar field dentro
          </button>

          <button
            type="button"
            onClick={() => {
              removeSection(sectionIndex);
            }}
          >
            Eliminar dentro
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          appendSection({ title: "", elements: [] });
          appendProfesor({ name: "", elements: [] });
        }}
      >
        agrega field padre
      </button>

      <button type="submit">Enviar</button>

      <TuComponente />

      <TuComponentes />
    </form>
  );
};

export default NestedForm;

// // Supongamos que tienes dos arrays como estas:
// const cursos = [
//   { id: 1, nombre: 'Curso 1' },
//   { id: 2, nombre: 'Curso 2' },
//   { id: 3, nombre: 'Curso 3' },
//   { id: 4, nombre: 'Curso 4' },
//   { id: 5, nombre: 'Curso 5' }
// ];

// const nombres = [
//   { id: 1, nombre: 'Nombre 1' },
//   { id: 2, nombre: 'Nombre 2' },
//   { id: 3, nombre: 'Nombre 3' },
//   { id: 4, nombre: 'Nombre 4' },
//   { id: 5, nombre: 'Nombre 5' }
// ];

// // Supongamos que seleccionas 3 cursos
// const cursosSeleccionados = cursos.slice(0, 3);

// // Filtrar la array de nombres para obtener la misma cantidad que cursos seleccionados
// const nombresSeleccionados = nombres.slice(0, cursosSeleccionados.length);

// // Imprimir los resultados
// console.log('Cursos Seleccionados:', cursosSeleccionados);
// console.log('Nombres Seleccionados:', nombresSeleccionados);

const TuComponente = () => {
  const [seleccion, setSeleccion] = useState([]);
  const [materiasDisponibles, setMateriasDisponibles] = useState([
    "Matemáticas",
    "Historia",
    "Ciencias",
    // Agrega más materias según sea necesario
  ]);

  const datosDeProfesor = [
    { id: 1, nombre: "Juan", materias: ["Matemáticas", "Historia"] },
    { id: 2, nombre: "María", materias: ["Ciencias"] },
    // Agrega más profesores según sea necesario
  ];

  const handleSeleccionChange = (index, campo, valor) => {
    const nuevaSeleccion = [...seleccion];
    nuevaSeleccion[index] = { ...nuevaSeleccion[index], [campo]: valor };
    setSeleccion(nuevaSeleccion);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con la información seleccionada, como enviarla a un servidor.
    console.log("Información seleccionada:", seleccion);
  };

  return (
    <div>
      <h2>Selecciona tus profesores y materias</h2>
      <form onSubmit={handleSubmit}>
        {materiasDisponibles.map((materia, index) => (
          <div key={index}>
            <label htmlFor={`profesor-${index}`}>
              Profesor para {materia}:
            </label>
            <select
              id={`profesor-${index}`}
              value={seleccion[index]?.profesor || ""}
              onChange={(e) =>
                handleSeleccionChange(index, "profesor", e.target.value)
              }
            >
              <option value="">Selecciona un profesor</option>
              {datosDeProfesor
                .filter((profesor) => profesor.materias.includes(materia))
                .map((profesor) => (
                  <option key={profesor.id} value={profesor.id}>
                    {profesor.nombre}
                  </option>
                ))}
            </select>

            <label htmlFor={`jornada-${index}`}>Jornada para {materia}:</label>
            <select
              id={`jornada-${index}`}
              value={seleccion[index]?.jornada || ""}
              onChange={(e) =>
                handleSeleccionChange(index, "jornada", e.target.value)
              }
            >
              <option value="">Selecciona la jornada</option>
              <option value="mañana">Mañana</option>
              <option value="tarde">Tarde</option>
            </select>
          </div>
        ))}
        <button type="submit">Guardar selección</button>
      </form>
    </div>
  );
};

const TuComponentes = () => {
  const { control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materias",
  });

  const onSubmit = (data) => {
    // Realiza la lógica de la segunda etapa aquí, verificando la disponibilidad de los profesores.
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Primera etapa</h2>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Controller
            control={control}
            name={`materias[${index}].profesor`}
            render={({ field }) => <input {...field} placeholder="Profesor" />}
          />
          <Controller
            control={control}
            name={`materias[${index}].materia`}
            render={({ field }) => <input {...field} placeholder="Materia" />}
          />
          <label>
            Mañana
            <Controller
              control={control}
              name={`materias[${index}].jornada`}
              render={({ field }) => (
                <input type="radio" value="mañana" {...field} />
              )}
            />
          </label>
          <label>
            Tarde
            <Controller
              control={control}
              name={`materias[${index}].jornada`}
              render={({ field }) => (
                <input type="radio" value="tarde" {...field} />
              )}
            />
          </label>
          <button type="button" onClick={() => remove(index)}>
            Eliminar
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({})}>
        Agregar Materia
      </button>

      <h2>Segunda etapa</h2>
      {/* Aquí debes mostrar la información de la segunda etapa según la lógica */}
      {/* Puedes utilizar la información de 'fields' para verificar la disponibilidad de los profesores */}

      <button type="submit">Enviar</button>
    </form>
  );
};
