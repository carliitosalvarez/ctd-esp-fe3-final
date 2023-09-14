import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./utils/global.context";




const Card = ({user}) => {
  const {favs, addUserToFavorites, removeUserFromFavorites} = useUserContext();
  const isFavorite = favs.some((fav) => fav.id === user.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeUserFromFavorites(user.id);
    } else {
      addUserToFavorites(user);
    }
  };
  return (
    <div className='card'>
    <Link to={`/detail/${user.id}`}>
      <h3>Nombre: {user.name}</h3>
      <img src='./images/doctor.jpg' alt=''style={{width: "100px"}}></img>
    </Link>
      <h4> Usuario: {user.username}</h4>
      <h4> Email: {user.email}</h4>
    <button className='favButton' onClick={toggleFavorite}>{isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos⭐'}</button>
  </div>
  )
}

export default Card


