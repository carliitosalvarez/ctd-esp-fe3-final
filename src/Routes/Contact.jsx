import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2 style={{fontSize:"36px", marginBottom:"16px"}}>¿Quieres saber más?</h2>
      <p style={{fontSize:"18px", marginBottom:"40px"}}>Dejanos tu correo y nos contactaremos!</p>
      <Form/>
    </div>
  )
}

export default Contact