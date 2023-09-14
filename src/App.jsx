import React from "react";
import "./App.css"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";




function App() {
  return (
    /*<Router>*/
      <div className="App">
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
