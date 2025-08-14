
import React,  {useState} from "react";

function ListaTareas(){

    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea]= useState ([]);
    
    function handleInptChange(event){
    
        setNuevaTarea(event.target.value);

    }
    

    function agregarTarea(index){
        if(nuevaTarea.trim() !== ""){
            setTareas([tareas, nuevaTarea]);
            setNuevaTarea("");
        }

    }

   function eliminarTarea(index){
        const nuevaTarea = tareas.filter((_, i) => i !== index);
        setTareas(nuevaTarea);
   }

  

   function contarTarea(index){
        if(index > 0 && index < tareas.length){
            const nuevaTarea = [...tareas];
            const tarea = nuevaTarea.splice(index, 1);
            nuevaTarea.splice(index - 1, 0, tarea[0]);
            setTareas(nuevaTarea);
        }
    }


    return(<div className = "ListaTareas">

        <h1>Lista Tareas</h1>

        <div>
            <input
                type= "texto"
                placeholder="Escriba una tarea.."
                value={nuevaTarea}
                onChange ={handleInptChange} />
            <button 
                className ="Agregar-boton"
                onClick={agregarTarea}>
                Agregar
            </button>
            <button
                className="Contar-boton"
                onClick={contarTarea}>
                Contar
            </button>
            <button
                className="Mostrar-boton"
                onClick={mostrarLista}>
                Mostrar
            </button>
            <button
                className= "Eliminar-boton"
                onClick={eliminarTarea}>
                Eliminar
            </button>
        </div>

        

    </div>);
}
export default ListaTareas;