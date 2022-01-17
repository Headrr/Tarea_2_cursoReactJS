const new_base_url = "https://pacific-savannah-47698.herokuapp.com/";
const recipes = "recetas";
const recipe_search ="recetas/"

export const recipesGet = () => `${new_base_url}${ recipes }`;
export const recipeGet = id => `${ new_base_url }${ recipe_search }${ id }`;
