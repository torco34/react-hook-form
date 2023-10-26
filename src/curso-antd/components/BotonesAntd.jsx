import React from "react";
import { Button } from "antd";
import {
  PlayCircleFilled,
  ShoppingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
const { Title, Text, Lin, Paragraph } = Typography;

export const BotonesAntd = () => {
  return (
    <div>
      <nav className="">
        <Link to="/bot">Buttones</Link>
        <Link to="/icon">Iconos </Link>
        <Link to="/tipo">tipogrfia </Link>
      </nav>
      <Title>Botones</Title>
      <Button type="primary">Primary</Button>
      <Button type="default">default</Button>
      <Button type="dashed">Primary</Button>
      <Button type="ghost">default</Button>
      <Button type="link">Primary</Button>
      <Button type="text">default</Button>
      <h2>propiedades adicionales</h2>
      <Button danger type="primary">
        danger
      </Button>
      <Button ghost> ghost</Button>
      <Button disabled>disable</Button>
      <Button loading type="primary">
        loading
      </Button>
      <h2>propiedades adicionales iconos</h2>
      <Button type="primary" size="large" icon={<SearchOutlined />}>
        Buscar
      </Button>
      <Button
        type="primary"
        shape="circle"
        icon={<ShoppingOutlined />}
      ></Button>
      <Button
        type="primary"
        shape="circle"
        icon={<ShoppingOutlined />}
        className="boton"
      ></Button>
    </div>
  );
};
