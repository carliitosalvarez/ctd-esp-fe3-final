import React from "react";
import Card from "../Components/Card";
import { useUserContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favs, theme} = useUserContext()
  const favsClass = theme === "light" ? "light" : "dark";
  console.log(favs)
  return (
    <div className={favsClass}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.map(fav=><Card user={fav} key={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
