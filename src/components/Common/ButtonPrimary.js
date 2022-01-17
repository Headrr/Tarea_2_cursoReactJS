import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ButtonPrimary = ({ type, to }) => (
  <Link to={ to }>
    <Button variant="primary" style={{backgroundColor: '#ff530d', color: 'white'}}>
      { type === "lyrics" ? "Ver receta": "Volver atrás" }
    </Button>
  </Link>
);

export default ButtonPrimary;
