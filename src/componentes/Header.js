import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({mostrarCompletadas ,ejecutarMostrarCompletadas}) => {
  //Creamos la funcion toggleCompletadas y retornamos el opuesto del valor de ejecutarMostrarCompletadas, 
  //para alternar entre si
  const toggleCompletadas = () => ejecutarMostrarCompletadas(!mostrarCompletadas); 

  {/* Creamos un condicional, si mostrarCompletadas existe retornamos   
       nuestro button con faEyeSlash. En el caso contrario retornamos el button con el icono faEye      */}
  return (
    <header className="header">
      <h1 className="header__titulo">Lista de Tareas</h1>
        {mostrarCompletadas ? 
        <button className="header__boton" onClick={() => toggleCompletadas()}> 
        No mostrar completadas
        <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      : 
        <button className="header__boton" onClick={() => toggleCompletadas()}> 
        Mostrar Completadas
        <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
        </button>
        } 
    </header>  
  
  );
};

export default Header;
