import { v4 as uuidv4 } from "uuid";

const datosProfesor = [
  { id: uuidv4(), name: "Juan Manuel" },
  { id: uuidv4(), name: "Jose Luis" },
  { id: uuidv4(), name: "Agustin" },
  { id: uuidv4(), name: "Sergio" },
  { id: uuidv4(), name: "Esteban" },
];

const datosJornadas = [
  { id: uuidv4(), name: "Mañana" },
  { id: uuidv4(), name: "Tarde" },
];
const nombresDeCursos = [
  { id: uuidv4(), name: "Informática" },
  { id: uuidv4(), name: "Matemáticas" },
  { id: uuidv4(), name: "Administración" },
  { id: uuidv4(), name: "Estadísticas" },
  { id: uuidv4(), name: "Ingles" },
];

export { datosProfesor, nombresDeCursos, datosJornadas };
