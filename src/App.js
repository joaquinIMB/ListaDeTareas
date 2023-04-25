import React, {useEffect, useState} from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
//Obtenemos las tareas guardadas en localStorage
const tareasGuardadas = localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas")) : [];
// Creamos una variable con un valor condicional, que convertimos en un string
// ya que localStorage guarda unicamente cadenas de texto.
let configMostrarCompletadas = "";
{localStorage.getItem("mostrarCompletadas") === null ? configMostrarCompletadas = true 
: configMostrarCompletadas = localStorage.getItem("mostrarCompletadas") === "true"};
//Utilizamos useState para cambiar el valor de tareas. Luego seteamos las mismas en localStorage
//y las convertimos en un JSON ya que contienen objetos.
const [tareas, cambiarTareas] = useState(tareasGuardadas);
useEffect(() => {localStorage.setItem("tareas", JSON.stringify(tareas))}, [tareas]);
//Utilizamos useState para cambiar el valor de "mostrarCompletadas" con la configMostrarCompletadas que nos traera de vuelta
//un string seteado dentro de localStorage.
const [mostrarCompletadas, ejecutarMostrarCompletadas] = useState(configMostrarCompletadas);
useEffect(() => {localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString())}, [mostrarCompletadas]);
//Renderizamos 3 componentes con sus propiedades pasadas por argumentos dentro de nuestra APP.

return (
    <div className="contenedor">
      <Header 
      mostrarCompletadas={mostrarCompletadas} 
      ejecutarMostrarCompletadas={ejecutarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas}
       cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
};

export default App;
