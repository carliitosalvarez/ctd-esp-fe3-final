import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./utils/global.context";




const Card = ({user}) => {
  const {theme, favs, addUserToFavorites, removeUserFromFavorites} = useUserContext();
  const isFavorite = favs.some((fav) => fav.id === user.id);
  const cardClass = theme === "light" ? "light" : "dark";
  const toggleFavorite = () => {
    if (isFavorite) {
      removeUserFromFavorites(user.id);
    } else {
      addUserToFavorites(user);
    }
  };
  return (
    <div style={{ boxShadow: '1px -1px 11px 0px rgba(204,204,204,1)', borderRadius: '10px'}} className={`card ${cardClass}`}>
    <Link to={`/detail/${user.id}`}>
      <h3>Nombre: {user.name}</h3>
      <img src='./images/doctor.jpg' alt=''style={{width: "100px"}}></img>
    </Link>
      <h4> Usuario: {user.username}</h4>
      <h4> Email: {user.email}</h4>
    <button style={{borderRadius:"10px", color: theme === 'light' ? 'black' : 'white'}} className='favButton' onClick={toggleFavorite}>{isFavorite ? 'Eliminar de Favoritos ❌' : 'Agregar a Favoritos ⭐'}</button>
  </div>
  )
}

export default Card


