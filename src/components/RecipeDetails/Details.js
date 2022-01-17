import React from "react";
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
import { Clock, User, Bookmark } from "react-feather";
import Flags from "country-flag-icons/react/3x2";

const tipoComida = (tipo) => {
  if (tipo === "China")
    return <Flags.CH title="China" style={{ width: "5%", borderRadius: 10 }} />;
  if (tipo === "Española")
    return <Flags.ES title="España" style={{ width: "5%" }} />;
  if (tipo === "Chilena")
    return <Flags.CL title="Chile" style={{ width: "5%" }} />;
  if (tipo === "Italiana")
    return <Flags.IT title="Italia" style={{ width: "5%" }} />;
};

const Details = ({ detalleReceta }) => {
  const {
    name,
    tiempo,
    porciones,
    tipo,
    url,
    prep,
    receta,
  } = detalleReceta;

  return (
    <div style={{ margin: 20 }}>
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
            <Row align="left"></Row>
          </CardSubtitle>
        </CardHeader>

        <CardBody>
          <Row>
            <Col
              style={{
                alignItems: "center",
                flexDirection: "column",
                alignSelf: "center",
              }}
            >
              <Col>
                <Clock size={20} /> Tiempo de preparación:{" "}
                <strong>{tiempo}</strong> minutos
              </Col>

              <Col>
                <User size={20} /> Porciones: <strong>{porciones}</strong>
              </Col>
              <br />
              <CardImg
                component="img"
                height={250}
                src={url}
                alt="fotografía receta"
                style={{ borderRadius: 10, width: 500 }}
              />
            </Col>
            <Col>
              <div style={{ textAlign: "justify", marginTop: 10, height: 110 }}>
                <strong>
                  <h3>
                    {" "}
                    <Bookmark size={25} /> <i>Preparación</i>
                  </h3>
                </strong>
                <hr />
                <i>{prep}</i>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </CardBody>

        <CardFooter
          style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Row>
            <Col style={{ width: "25%", textAlign: "left" }} align="center">
              <div>
                <strong>
                  <h3>
                    {" "}
                    <Bookmark size={25} /> <i>Receta</i>
                  </h3>
                </strong>
                <hr />

                <Row style={{ alignItems: "flex-start" }}>
                  <Col>
                    {receta?.INGREDIENTES.length >= 1 ? (
                      <div
                        style={{
                          marginHorizontal: 20,
                          fontSize: 20,
                          marginBottom: 10,
                        }}
                      >
                        Ingredientes:
                      </div>
                    ) : null}

                    {receta?.INGREDIENTES
                      ? receta?.INGREDIENTES.map((ingrediente) => (
                          <>
                            <div
                              style={{ marginHorizontal: 20, fontSize: 15 }}
                              key={ingrediente}
                            >
                              - {ingrediente}
                            </div>
                          </>
                        ))
                      : null}
                  </Col>

                  <Col>
                    {receta?.MASA.length >= 1 ? (
                      <div
                        style={{
                          marginHorizontal: 20,
                          fontSize: 20,
                          marginBottom: 10,
                        }}
                      >
                        Masa:
                      </div>
                    ) : null}

                    {receta?.MASA
                      ? receta?.MASA.map((ingrediente) => (
                          <>
                            <div
                              style={{ marginHorizontal: 20, fontSize: 15 }}
                              key={ingrediente}
                            >
                              - {ingrediente}
                            </div>
                          </>
                        ))
                      : null}
                  </Col>

                  <Col>
                    {receta?.RELLENO.length >= 1 ? (
                      <div
                        style={{
                          marginHorizontal: 20,
                          fontSize: 20,
                          marginBottom: 10,
                        }}
                      >
                        Relleno:
                      </div>
                    ) : null}

                    {receta?.RELLENO
                      ? receta?.RELLENO.map((ingrediente) => (
                          <>
                            <div
                              style={{ marginHorizontal: 20, fontSize: 15 }}
                              key={ingrediente}
                            >
                              - {ingrediente}
                            </div>
                          </>
                        ))
                      : null}
                  </Col>

                  <Col>
                    {receta?.TOPPING.length >= 1 ? (
                      <div
                        style={{
                          marginHorizontal: 20,
                          fontSize: 20,
                          marginBottom: 10,
                        }}
                      >
                        Topping:
                      </div>
                    ) : null}

                    {receta?.TOPPING
                      ? receta?.TOPPING.map((ingrediente) => (
                          <>
                            <div
                              style={{ marginHorizontal: 20, fontSize: 15 }}
                              key={ingrediente}
                            >
                              - {ingrediente}
                            </div>
                          </>
                        ))
                      : null}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Details;
