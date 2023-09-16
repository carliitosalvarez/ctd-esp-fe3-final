import React from 'react'
import { useUserContext } from './utils/global.context'

const Footer = () => {
  const {theme} = useUserContext();
  const footerClass = theme === "light" ? "light" : "dark";

  return (
    <footer style={{width: "auto"}} className={footerClass}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
