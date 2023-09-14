import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme} = useUserContext();
  const themeClass = theme === "light" ? "light" : "dark";

  return (
    <nav className={toggleTheme}>
      <img src="./DH.ico" alt="" />
        <Link to='/'>Home</Link>
        <br />
        <Link to='/favs'>Favoritos</Link>
        <br/>
        <Link to="/contact">Contacto</Link>
        <br/>  
        <button className={themeClass} onClick={toggleTheme}>cambio de tema</button>
    </nav>
    
  )
}

export default Navbar