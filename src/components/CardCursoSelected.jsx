import React from "react";
import Card from 'react-bootstrap/Card';
export const CardCursoSelected = ({  apellido, name, profesor, hora, tiempo, cursos, items }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{apellido}</Card.Subtitle>
          <Card.Text>{profesor}</Card.Text>
          <Card.Link>{hora}</Card.Link>
          <Card.Link>{tiempo}</Card.Link>
          <Card.Link>{cursos}</Card.Link>
          <Card.Link>{items}</Card.Link>
         

        </Card.Body>
      </Card>
    </div>
  );
};
