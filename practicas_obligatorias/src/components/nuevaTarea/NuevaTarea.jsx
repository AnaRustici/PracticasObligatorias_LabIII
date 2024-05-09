import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const NuevaTarea = ({onTareaDataSaved}) => {
    const [newTarea, setNewTarea] = useState('')

    const inputHandler = (event) => {
        setNewTarea(event.target.value)
    }

    const submitTareaHandler = (event) => {
        event.preventDefault()
        if (newTarea != '') {
            const tareaData = {
                description: newTarea
            }
    
            onTareaDataSaved(tareaData)
            setNewTarea('')
        }
    }
  return (
    <div>
        <Form onSubmit={submitTareaHandler}>
            <Form.Control value={newTarea} type="text" placeholder="Escriba acá la tarea" onChange={inputHandler}></Form.Control>
            <br></br>
            <Button type="submit" variant="dark">Agregar Tarea</Button>
        </Form>
    </div>
  )
}

export default NuevaTarea