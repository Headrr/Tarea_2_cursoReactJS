## Tarea n°2 (Context API)
#### Curso JS Escalab
####
**CookApp:**
*La aplicación que presenta las mejores recetas*
###
#### Librerías utilizadas:
* Estilos: Reactstrap
* Iconos: React-feather
* Navbar: Material UI
* Router: react-router-dom
* Banderas: country-flag-icons

#### Llamadas a API:
* Método fetch (nativo)

#### API:
* API personal de recetas desplegado en heroku
###
Métodos:
*  Url base: https://pacific-savannah-47698.herokuapp.com/
*  Listado recetas: https://pacific-savannah-47698.herokuapp.com/recetas
*  Detalle receta (id): https://pacific-savannah-47698.herokuapp.com/recetas/:id

#### Patrones de diseño:
*  Render Props => para manejar un estado que pueda ser pasado al hijo (compartir funcionalidad y componentes reutilizables)
*  Provider => donde hacemos uso de HOC y Context API (disponibilizar el arbol de datos a otros contextos)
*  HOC => Componente de Orden Superior que permite sobreponer definiciones a otras
