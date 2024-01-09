import React, { useState } from "react";
import { useHookCourse } from "../useContext/HooksAllProvider";
import { StudyProgress } from "../components";

import { BsFillPencilFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
export const CursosPages = ({}) => {
  const { contextAllHooks } = useHookCourse();
  const {
    getDataInforma,
    setGetDataInforma,
    showIconsCrud,
    setShowIconsCrud,
    dataTeacher,
  } = contextAllHooks;

  const deleteCard = (items) => {
    const neverElements = getDataInforma.filter((element) => element !== items);
    setGetDataInforma(neverElements);
    setShowIconsCrud(false);
  };
  return (
    <div className="   mb-3">
      {getDataInforma.map((items, index) => (
        <div key={index} className="border card p-4 bg-light mb-4">
          <div className="d-flex  align-items-start justify-content-end ">
            {showIconsCrud && (
              <div className="d-flex">
                <p className="">
                  <Button type="" onClick={() => deleteCard(items)}>
                    <DeleteFilled />
                  </Button>
                </p>
                <p className="">
                  <Button type="">
                    <BsFillPencilFill />
                  </Button>
                </p>
              </div>
            )}
            <Button type="" onClick={() => setShowIconsCrud(!showIconsCrud)}>
              <BsThreeDotsVertical
                style={{ color: "#666", fontSize: "16px" }}
              />
            </Button>
          </div>
          <p>
            <span className="font-weight-bold">Nombre:</span> {items.name}{" "}
            {items.apellido}{" "}
          </p>

          {items.items2.map((curso, cursoIndex) => (
            <div key={cursoIndex} className="d-fl">
              <p>
                <span className="font-weight-bold">Materia: </span>{" "}
                {curso.corsos}
              </p>
              <p>
                {" "}
                <span className="font-weight-bold">Horas:</span> {curso.horas}
              </p>
            </div>
          ))}
          <hr />
          {items.items3.map((item3, index3) => (
            <div key={index3} className="">
              <p>
                <span className="font-weight-bold">Profesor: </span>{" "}
                {item3.profesor || "Nombre no disponible"}
              </p>
              <p>
                <span className="font-weight-bold">Jornada: </span>{" "}
                {item3.jornada || "Nombre no disponible"},
              </p>
              <p>
                <span className="font-weight-bold">curso: </span>{" "}
                {item3.curso || "Nombre no disponible"},
              </p>
            </div>
          ))}

          <StudyProgress
            estado1="finalizado"
            estado2="enProgreso"
            estado3="restante"
          />
        </div>
      ))}
    </div>
  );
};
