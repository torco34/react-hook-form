import React from "react";
import { Bs0SquareFill, Bs1CircleFill } from "react-icons/bs";
import { CursosPages } from "../page/CursosPages";

export const StudyProgress = ({ img, titulo, estado1, estado2, estado3,  apellido, horas}) => {
  return (
    <div className="d-flex">
    
      {/* <img src={img} alt="" width="80" height="70" className="rounded" /> */}
     
      <p>{horas}</p>
      <h2>{apellido}</h2>
      <div className="d-flex justify-content-center gap-3 mb-2">
     
        {estado1 === "finalizado" && (
          
          <span className="text-center">
           
            <Bs0SquareFill className="text-success bg-light" />
            <br />
            Finalizado
          </span>
        )}
        {estado2 === "enProgreso" && (
          <span className="text-center">
            <Bs1CircleFill className="text-info" />
            <br />
            En progreso
          </span>
        )}
        {estado3 === "restante" && (
          <span className="text-center">
            <Bs0SquareFill className="text-warning" />
            <br />
            Restante
          </span>
        )}
      </div>
    </div>
  );
};
