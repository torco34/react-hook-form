import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export const Header = () => {
  return (
    <>
      <nav className="header">
        <ul className="cont-nav  ">
          <li className=" ">
            <Link to="/pages">Curso Antd </Link>
          </li>
          <li className="border border-info  btn list-inline-item text-center ">
            <Link to="/form">Validación </Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/stud">Reto two</Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/practicas">Practicas</Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/page">curso</Link>
          </li>
          <li className="text-center btn list-inline-item ">
            <Link to="/proyecto">Proyecto no</Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/bor">Proyecto funciona </Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/borrador">Borrador</Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/horas">Horas</Link>
          </li>
          <li className="border border-info btn list-inline-item ">
            <Link to="/tecclas">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
