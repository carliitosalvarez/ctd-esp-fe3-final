import React, {useState} from "react";


const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email } = formData;

    if (nombre.length < 5 || /[^a-zA-Z\s]/.test(nombre)) {
      setError('El nombre debe tener al menos 5 caracteres y no debe contener caracteres especiales.');
      return;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError('El correo electrónico no es válido.');
      return;
    }

    setMensaje(`Gracias ${nombre}, te contactaremos cuanto antes vía email!`);
    setError('');
  };

  return (
    <div>
      <form style={{textTransform:"uppercase"}} onSubmit={handleSubmit}>
          <label>Nombre Completo: </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={{height:"18px"}}
          />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{height:"18px"}}
          />
        <button className="favButton" style={{borderRadius:"4px", backgroundColor: "lightgrey", textTransform:"uppercase"}} type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Form;
