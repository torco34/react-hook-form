import React from "react";
import { CarouselText } from "../components";

export const DescriptionProject = () => {
  return (
    <>
      <div className="bg-light  p-4">
        <div>
          <CarouselText
            textH1="React Hook Form"
            textP="En mi aplicación, implementé React Hook Form para gestionar
                  formularios, haciendo uso especialmente de FieldArray para
                  manejar campos dinámicos. Además, incorporé validaciones en
                  tiempo real para mejorar la experiencia del usuario."
          />

          <CarouselText
            textH1=" React Router "
            textP=" Para la navegación, utilicé React Router con rutas anidadas
                  para organizar la estructura de la aplicación de manera
                  eficiente. Además, implementé medidas de seguridad mediante
                  rutas protegidas, asegurando que ciertas secciones solo sean
                  accesibles para usuarios autorizados."
          />
          <CarouselText
            textH1=" Formulario dinámico "
            textP=" He creado un formulario dinámico para 
            recopilar la descripción de un estudiante, 
            centrándome en sus materias de estudio.
             El formulario utiliza un arreglo que me
              permite seleccionar las materias, ingresar 
              las horas dedicadas a cada una y especificar
              los profesores correspondientes.El código utiliza
               React Hook Form para gestiona el estado del formulario
                de manera eficiente.Utilizo la función useForm para obtener 
                acceso a las funcionalidades necesarias."
          />
        </div>
      </div>
    </>
  );
};
