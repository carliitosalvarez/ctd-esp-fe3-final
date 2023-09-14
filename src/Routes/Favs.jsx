import React from "react";
import Card from "../Components/Card";
import { useUserContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favs} = useUserContext()
  console.log(favs)
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.map(fav=><Card user={fav} key={fav.id}/>)}
      </div>
    </>
  );
};

export default Favs;
