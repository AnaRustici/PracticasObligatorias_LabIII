import { CloseButton, Form, ListGroup } from "react-bootstrap"
import './Tarea.css'
import { useState } from "react"

const Tarea = ({ desc, onDeleteTarea, id }) => {
    const [checkedTarea, setCheckedTarea] = useState(false)

    const checkboxHandler = () => {
        setCheckedTarea(!checkedTarea)
    }

    const valueVariant = checkedTarea ? 'dark' : 'info'

    const deleteTareaHandler = () => {
        onDeleteTarea(id)
    }

    return (
        <>
            <ListGroup.Item className="list-element" variant={valueVariant}>
                <Form.Check onClick={checkboxHandler} className="check-button"></Form.Check>
                {desc}
                <CloseButton onClick={deleteTareaHandler}></CloseButton>
            </ListGroup.Item>
        </>
    )
}

export default Tarea