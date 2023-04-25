import React from 'react';
import Tareas from "./Tareas"

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {
    
const toggleCompletada = (id) => {
    cambiarTareas(tareas.map((tarea) => {
        if (tarea.id === id) {
            return {...tarea, completada: !tarea.completada,}
        };
            return tarea;

        }))};

const editarTarea = (id, nuevaTarea) => {
    cambiarTareas(tareas.map((tarea) => {
        if (tarea.id === id) {
            return {...tarea, texto: nuevaTarea}
        };
            return tarea;

        }))};
const borrarTarea = (id) => {
    cambiarTareas(tareas.filter((tarea) => {
        if (tarea.id !== id) {
            return tarea
        };
            return ;

        }))};

    return ( 
        <ul className='lista-tareas'>
        {tareas.length > 0 ? tareas.map((tarea)  =>{
            if(mostrarCompletadas){
                return  <Tareas 
                key={tarea.id} 
                tarea={tarea} 
                toggleCompletada={toggleCompletada} 
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
                />
            //Si no estan completadas las devolvemos a la pantalla
                } else if(!tarea.completada){
                return  <Tareas 
                key={tarea.id} 
                tarea={tarea} 
                toggleCompletada={toggleCompletada} 
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
                />
            //Si las tareas estan completadas no devolvemos nada a la pantalla
                } return;

            })
        : <div className='lista-tareas__mensaje'>No hay tareas agendadas</div>
        }
        </ul>
     );
}
 
export default ListaTareas;