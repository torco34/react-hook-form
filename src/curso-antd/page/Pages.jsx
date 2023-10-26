import React from "react";
import { IconosAntd, BotonesAntd, TipografAntd } from "../components/Index";
import { Link } from "react-router-dom";

export const Pages = () => {
  return (
    <div className="page">
      <nav className="">
        <Link to="/bot">Buttones</Link>
        <Link to="/icon">Iconos </Link>
        <Link to="/tipo">tipogrfia </Link>
      </nav>
     <h2>Curso de Antd</h2>
      <br />
      {/* <BotonesAntd /> */}
      <br />
      {/* <TipografAntd /> */}
    </div>
  );
};
