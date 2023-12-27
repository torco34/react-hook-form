import { v4 as uuidv4 } from "uuid";

const dataNameTeachers = [
  { id: uuidv4(), name: "Juan" },
  { id: uuidv4(), name: "Jose" },
  { id: uuidv4(), name: "Agustin" },
  { id: uuidv4(), name: "Sergio" },
  { id: uuidv4(), name: "Esteban" },
];

const dataTimes = [
  { id: uuidv4(), name: "Mañana" },
  { id: uuidv4(), name: "Tarde" },
];
const dataNameCourses = [
  { id: uuidv4(), name: "Informática" },
  { id: uuidv4(), name: "Matemáticas" },
  { id: uuidv4(), name: "Administración" },
  { id: uuidv4(), name: "Estadísticas" },
  { id: uuidv4(), name: "Ingles" },
];

export { dataNameTeachers, dataTimes, dataNameCourses };