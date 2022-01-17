import React, { Fragment, useContext } from "react";
import { RecetaContext } from "../../contexts/RecipeDetailsContext";
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";
import ButtonPrimary from "../Common/ButtonPrimary";
import Details from "./Details";
import { Row, Col } from "reactstrap";

const Receta = () => {
  const { doneFetchReceta, receta } = useContext(RecetaContext);
  return (
    <Fragment>
      {doneFetchReceta ? (
        receta ? (
          <Fragment>
            <Row
              style={{ flexDirection: "column", marginLeft: 10, marginTop: 20 }}
            >
              <Col>
                <ButtonPrimary type="back" to="/" />
              </Col>
            </Row>
            {/* Patrón de diseño Render Props en componente Details para modificar el valor de la prop detalleReceta a renderizar */}
            <Details detalleReceta={receta} />
          </Fragment>
        ) : (
          <Message text="No Results" />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Receta;
