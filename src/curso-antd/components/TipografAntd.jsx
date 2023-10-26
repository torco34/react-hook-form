import React, { useState } from "react";
import { Typography, Space, Grid } from "antd";
import { Link } from "react-router-dom";
const { Title, Text, Lin, Paragraph } = Typography;

export const TipografAntd = () => {
  const [editar, setEditar] = useState("");
  return (
    <div className="tipogra">
      <nav className="">
        <Link to="/bot">Buttones </Link>
        <Link to="/icon">Iconos </Link>
        <Link to="/tip">tipogrfia </Link>
      </nav>
      <div className="tipografia">
        <h2>Tipografía</h2>
        <br></br>
        {/* <Title>Tipografía</Title> */}
        <Title level={2}>h2</Title>
        <Title level={3}>h3</Title>
        <Title level={4}>h1</Title>
        <Title level={5}>h1</Title>

        <Space direction="vertical">
          <Text> default</Text>
          <Text type="secondary">secondary</Text>
          <Text type="success">success</Text>
          <Text type="danger">danger</Text>
          <Text type="warning">warning</Text>
          <Text disabled>disabled</Text>
          <Text mark>mark</Text>
          <Text code>code</Text>
          <Text keyboard>keyboard</Text>
          <Text underline>underline</Text>
          <Text strong>strong</Text>
          <Text delete>delete</Text>
        </Space>

        <Paragraph copyable>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi,
          consequuntur cumque id laborum maiores maxime minus, nihil
          dignissimos, rerum unde quas esse optio dolor sit vitae tempora
          voluptatum doloribus?
        </Paragraph>
        <Paragraph editable={{ onChange: setEditar }}>{editar}</Paragraph>
      </div>
    </div>
  );
};
