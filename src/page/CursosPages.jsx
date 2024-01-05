import React from "react";
import { useHookCourse } from "../useContext/HooksAllProvider";
import { CardCursoSelected, ProfileInfo, StudyProgress } from "../components";
import Card from "react-bootstrap/Card";
import { BsFillPencilFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";
export const CursosPages = ({}) => {
  const { contextAllHooks } = useHookCourse();
  const { getDataInforma, showIconsCrud, setShowIconsCrud } = contextAllHooks;

  return (
    <div className="   mb-3">
      {getDataInforma.map((items, index) => (
        <div key={index} className="border card p-4 bg-light mb-4">
          <div className="d-flex  align-items-start justify-content-end ">
            <Button type="" onClick={() => setShowIconsCrud(!showIconsCrud)}>
              <BsThreeDotsVertical
                style={{ color: "#666", fontSize: "16px" }}
              />
            </Button>
            {showIconsCrud && (
              <div className="d-flex border  mr-5 "  >
                <p>
                  <DeleteFilled className="mr-5" />{" "}
                </p>
                <p>
                  <BsFillPencilFill />
                </p>
              </div>
            )}
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
