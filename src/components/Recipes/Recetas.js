import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Receta from "./Receta";
import Message from "../Common/Message";

const Tracks = ({ recetas, text }) => (
  <Fragment>
    {/* Patrón de diseño Render Props en Componente Message para variar el valor de la prop text de acuerdo al mensaje que se esté pasando */}
    <Message text={text} />
    <div className="root">
      <Grid container spacing={3} justify="center">
        {recetas.map((receta) => {
          const { id, name, tiempo, porciones, tipo, etiquetas, url, descripcion} =
          receta;
          return (
            <Receta
              key={id}
              id={id}
              name={name}
              tiempo={tiempo}
              porciones={porciones}
              tipo={tipo}
              etiquetas={etiquetas}
              url={url}
              descripcion={descripcion}
            />
          );
        })}
         {/* Patrón de diseño Render Props en Componente Receta para renderizar el valor de las props de acuerdo al que se esté pasando */}
      </Grid>
    </div>
  </Fragment>
);

export default Tracks;
