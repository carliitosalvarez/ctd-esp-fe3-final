import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme} = useUserContext();
  const themeClass = theme === "light" ? "light" : "dark";

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-evenly', width: 'auto' }} className={themeClass}>
      <img src="./DH.ico" alt="" />
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favoritos</Link>
        <Link to="/contacto">Contacto</Link> 
        <button style={{
          width:'50px',
          border: '0px',
          borderRadius: '10%',
          boxShadow: '1px -1px 11px 0px rgba(204,204,204,1)',
          color: theme === 'light' ? 'black' : 'yellow', 
          backgroundColor: 'transparent', 
        }} className={themeClass} onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
          </button>
    </nav>
    
  )
}

export default Navbar