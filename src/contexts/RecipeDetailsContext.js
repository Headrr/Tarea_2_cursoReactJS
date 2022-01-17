import React, { createContext, useState, useEffect } from "react";
import { recipeGet } from "../constants";

export const RecetaContext = createContext();

const RecetaContextProvider = ({ children }) => {
  const id = window.location.pathname.split("/")[3];
  const [doneFetchReceta, setDoneFetchReceta] = useState(false);
  const [receta, setReceta] = useState([]);

  useEffect(() => getReceta(id), [id]);

  const getReceta = (id) => {
    fetch(recipeGet(id))
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchReceta(true);
        setReceta(data);
      })
      .catch((err) => console.log(err));
  };

  // Patrón de diseño PROVIDER aplicado en RecetaContext.Provider para disponibilizar el árbol de datos (value) a otros contextos
  return (
    <RecetaContext.Provider value={{ doneFetchReceta, receta }}>
      {children}
    </RecetaContext.Provider>
  );
};

export default RecetaContextProvider;
