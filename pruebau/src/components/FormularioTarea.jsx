import React, {useState} from "react";

function FormularioTareas(){
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    function handleInputChange(event) {
        setNuevaTarea(event.target.value);
    }

    function agregarTarea() {
        if (nuevaTarea.trim() !== "") {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
        }
    }

    return (
        <div className="FormularioTareas">
            <h1>Formulario de Tareas</h1>
            <input
                type="text"
                placeholder="Escriba una tarea..."
                value={nuevaTarea}
                onChange={handleInputChange}
            />
            <button onClick={agregarTarea}>Agregar Tarea</button>
        </div>
    );
}

export default FormularioTareas;