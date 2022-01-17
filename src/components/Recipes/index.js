import React, { Fragment, useContext } from "react";
import { RecetasContext } from "../../contexts/RecetasContext";
import Recetas from "./Recetas";
import ProgressBar from "../Common/ProgressBar";
import Message from "../Common/Message";

const Recipes = () => {
  const { doneFetch, recetas, text } = useContext(RecetasContext);
  return (
    <Fragment>
      {doneFetch ? (
        recetas.length ? (
          <Recetas text={text} recetas={recetas} />
        ) : (
          <Message text={text} />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default Recipes;
