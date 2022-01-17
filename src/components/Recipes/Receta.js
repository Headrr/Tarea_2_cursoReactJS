import React from "react";
import ButtonPrimary from "../Common/ButtonPrimary";

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardSubtitle,
  CardTitle,
  CardFooter,
  CardImg,
} from "reactstrap";
import { Clock, User } from "react-feather";
import Flags from "country-flag-icons/react/3x2";

const tipoComida = (tipo) => {
  if (tipo === "China")
    return (
      <Flags.CH title="China" style={{ width: "12%", borderRadius: 10 }} />
    );
  if (tipo === "Española")
    return <Flags.ES title="España" style={{ width: "12%" }} />;
  if (tipo === "Chilena")
    return <Flags.CL title="Chile" style={{ width: "12%" }} />;
  if (tipo === "Italiana")
    return <Flags.IT title="Italia" style={{ width: "12%" }} />;
};

const Track = ({
  id,
  name,
  tiempo,
  porciones,
  tipo,
  etiquetas,
  url,
  descripcion,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: 550,
      width: "22%",
      alignItems: "center",
      marginRight: 20,
      marginLeft: 20,
      marginBottom: 40,
    }}
  >
    <Card style={{ borderRadius: 15, marginBottom: 20 }}>
      <CardHeader
        style={{
          backgroundColor: "#a0a0a0ba",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        <CardTitle>
          <Row style={{ justifyContent: "space-between", margin: 10 }}>
            <h3>{name}</h3>
            {tipoComida(tipo)}
          </Row>
        </CardTitle>
        <CardSubtitle>
          <Row align="left">
            <Col>
              {etiquetas.map((item) => (
                <span style={{ margin: 3 }}>
                  <i>{item}</i>
                </span>
              ))}
            </Col>
          </Row>
        </CardSubtitle>
      </CardHeader>
      <CardBody>
        <CardImg
          component="img"
          height="194"
          src={url}
          alt="fotografía receta"
          style={{ borderRadius: 10 }}
        />

        <div style={{ textAlign: "justify", marginTop: 10, height: 110 }}>
          <i>{descripcion}</i>
        </div>

        <Row>
          <Col align="right">
            <ButtonPrimary type="lyrics" to={`/recetas/id/${id}`} />
          </Col>
        </Row>
      </CardBody>
      <CardFooter
        style={{
          backgroundColor: "#a0a0a0ba",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Col>
          <Clock size={20} /> Tiempo de preparación: <strong>{tiempo}</strong>{" "}
          minutos
        </Col>

        <Col>
          <User size={20} /> Porciones: <strong>{porciones}</strong>
        </Col>
      </CardFooter>
    </Card>
  </div>
);

export default Track;
