import {ListGroup} from 'react-bootstrap';
import './ListaTareas.css';
import NuevaTarea from '../nuevaTarea/NuevaTarea';
import Tarea from '../tarea/Tarea';
import { useState } from 'react';

const TAREAS = [
    {id: 1, description: "Ir al supermercado"},
    {id: 2, description: "Ir al dentista"},
    {id: 3, description: "Alimentar al perro"}
]

const ListaTareas = () => {
    const [tareas, setTareas] = useState(TAREAS)

    const saveTareaDataHandler = (enteredTareaData) => {
        const tareaData = {
            ...enteredTareaData,
            id: Math.random().toString(),
        }
        setTareas((prev) => [...prev, tareaData])
    }

    const deleteTareaDataHandler = (tareaId) => {
        setTareas((prev) => prev.filter((tarea) => tarea.id !== tareaId))
    }
    return (
        <>
            <div className='div-tareas'>
                <h2>Lista de tareas</h2>
                <NuevaTarea onTareaDataSaved={saveTareaDataHandler}></NuevaTarea>
                <hr></hr>
                <ListGroup>
                    {tareas.map((tarea) => (
                        <Tarea key={tarea.id} id={tarea.id} desc={tarea.description} onDeleteTarea={deleteTareaDataHandler}></Tarea>
                    ))}
                </ListGroup>
            </div>

        </>

    )
}

export default ListaTareas