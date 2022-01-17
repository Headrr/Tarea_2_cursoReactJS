import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";

import RecipesContextProvider from "./contexts/RecetasContext";
import RecipeDetailsContextProvider from "./contexts/RecipeDetailsContext";

import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import "./assets/css/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              {/* HOC en RecipesContextProvider para Englobar la definición de Recipes y pasarle otras características, en este caso el context de Recipes que recibe la API */}
              <RecipesContextProvider> 
                <Recipes />
              </RecipesContextProvider>
            </Route>
            <Route exact path="/recetas/id/:id">
              {/* HOC en RecipeDetailsContextProvider para Englobar la definición de RecipeDetails y pasarle otras características, en este caso el context de RecipeDetails que recibe la data de la receta según el id */}
              <RecipeDetailsContextProvider>
                <RecipeDetails />
              </RecipeDetailsContextProvider>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
