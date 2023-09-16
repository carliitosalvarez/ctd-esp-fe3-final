import React from "react";
import "./App.css"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useUserContext } from "./Components/utils/global.context";




function App() {
  const {theme} = useUserContext();
  const appClass = theme === "light" ? "light" : "dark";
  return (
    /*<Router>*/
      <div className={`App ${appClass}`}>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          </Routes>
          
          <Footer/>
      </div>
      /*</Router>*/
  );
}

export default App;
