import { useState } from "react";

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
    </div>
  );
};
