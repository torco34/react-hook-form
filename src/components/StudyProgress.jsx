import React from "react";
import { Bs0SquareFill, Bs1CircleFill } from "react-icons/bs";

export const StudyProgress = ({ img, titulo, estado1, estado2, estado3 }) => {
  return (
    <div className="border bg-light text-dark-emphasis text-center mb-3 ">
      <img src={img} alt="" width="80" height="70" className="rounded" />
      <p className="p-3">{titulo}</p>
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
