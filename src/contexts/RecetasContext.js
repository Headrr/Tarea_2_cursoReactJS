import React, { createContext, useState, useEffect } from "react";
import { recipesGet } from "../constants";

export const RecetasContext = createContext();

const RecetasContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [recetas, setRecetas] = useState([]);
  const text = "Top recetas";

  useEffect(() => {
    getTopRecipes();
  }, []);

  const getTopRecipes = () => {
    fetch(recipesGet())
      .then(res => res.json())
      .then(data => {
        setDoneFetch(true);
        setRecetas(data);
        console.log(data)
      })
      .catch((err) => console.log(err));
  };

  // Patrón de diseño PROVIDER aplicado en RecetasContext.Provider para disponibilizar el árbol de datos (value) a otros contextos
  return (
    <RecetasContext.Provider value={{ 
      doneFetch, 
      text, 
      recetas, 
      }}>
      {children}
    </RecetasContext.Provider>
  );
};

export default RecetasContextProvider;
