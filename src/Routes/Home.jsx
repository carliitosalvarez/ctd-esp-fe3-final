import React from 'react'
import Card from '../Components/Card'
import { useUserContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, toggleTheme} = useUserContext();
  const themeClass = theme === "light" ? "light" : "dark";

  const {users} = useUserContext()
  return (
    <main className={themeClass}>
      <h1>Home</h1>
      <br/>
      <div className='card-grid'>
      {users.map(user => (<Card user={user} key={user.id}/>))}
      </div>
    </main>
  )
}

export default Home
