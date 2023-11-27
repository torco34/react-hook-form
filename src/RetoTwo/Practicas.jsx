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
  const profesores = ["Profesor1", "Profesor2", "Profesor3"];
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
    </form>
  );
};

export default NestedForm;
