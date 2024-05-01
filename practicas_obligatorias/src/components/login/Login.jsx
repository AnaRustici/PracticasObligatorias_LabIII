import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css'
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('')

  const handleUser = (event) => {
    const inputValue = event.target.value
    setUser(inputValue)
    if (verifyUser(inputValue)){
      alert('Por favor, ¡Nombres de usuario sin la letra o!')
    }
  }

  const verifyUser = (value) => {
    return value.toUpperCase().includes('O')
  }

  const handleSubmitButton = () => {
    if (verifyUser(user) || user == '') {
      alert('Usuario inválido para registrarse')
    } else {
      alert('¡Usuario registrado correctamente!')
    }

    setUser('')
  }

  return (
    <div>
      <Form className='form-login'>
        <Form.Control value={user} onChange={handleUser} placeholder='Username'></Form.Control>
        <br></br>
        <Button variant='light' onClick={handleSubmitButton}>Registrarse</Button>
        <p>{user}</p>
      </Form>
    </div>
  )
}

export default Login