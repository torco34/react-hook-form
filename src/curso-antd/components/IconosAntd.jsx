import React from "react";
import {
  PlayCircleFilled,
  ShoppingOutlined,
  SkinOutlined,
  CarTwoTone,
} from "@ant-design/icons";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
const { Title, Text, Lin, Paragraph } = Typography;

export const IconosAntd = () => {
  return (
    <div>
          <nav className="">
        <Link to="/bot">Buttones</Link>
        <Link to="/icon">Iconos </Link>
        <Link to="/tipo">tipogrfia </Link>
      </nav>
       <Title>Iconos</Title>
      <PlayCircleFilled
        style={{ fontSize: "40px", color: "#cccc" }}
        spin={true}
      />
      <br></br>
      <ShoppingOutlined
        style={{ fontSize: "40px", color: "#ca72b7cc" }}
        rotate={160}
      />
      <br></br>
      <br></br>
      <SkinOutlined
        style={{ fontSize: "40px", color: "#7297cacc" }}
        rotate={80}
      />
      <br></br>
      <br></br>
      {/* cuando los iconos son de dos tonalidades se coloca la propiedad twoTonecolor */}
      <CarTwoTone style={{ fontSize: "40px" }} twoToneColor={"#bac13dcc"} />

      <div>
        <h2>clases de botones</h2>
       
      </div>
      <div>
       
      </div>
    </div>
  );
};
