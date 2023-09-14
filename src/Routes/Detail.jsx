import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../Components/utils/global.context";


const Detail = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    const { users, addUserToFavorites } = useUserContext();
    const [user, setUser] = useState(null);
  
    // Buscar el usuario por ID en la lista de usuarios
    useEffect(() => {
      const userById = users.find((user) => user.id === parseInt(id));
      setUser(userById);
    }, [id, users]);
  
    const addToFavorites = () => {
      if (user) {
        addUserToFavorites(user);
        alert(`Agregado a favoritos: ${user.name}`);
      }
    };
  
    return (
      <div>
        {user ? (
          <div>
            <h2>Detalles del Usuario</h2>
            <img src="../images/doctor.jpg" alt="" style={{width:"100px"}} />
            <h3>Nombre: {user.name}</h3>
            <p>Correo electrónico: {user.email}</p>
            <p>Telefono: {user.phone}</p>
            <p>Website: {user.website}</p>
            <button onClick={addToFavorites}>Agregar a Favoritos⭐</button>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  };
  
  export default Detail;