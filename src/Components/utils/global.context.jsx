import axios from "axios";
import { useContext, createContext, useState, useReducer, useEffect } from "react";

const UserContext = createContext();
const localFavs = JSON.parse(localStorage.getItem("favs"));
const initialFavState = localFavs ? localFavs : [];
const initialTheme = "ligth";

const userReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FAV':
        return { ...state, favs: [...state.favs, action.payload] };
      case 'REMOVE_FAV':
        return {
          ...state,
          favs: state.favs.filter((user) => user.id !== action.payload),
        };
      case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light"
      };
      default:
        return state;
    }
  };

const UserContextProvider = ({children})=>{
    const [users, setUsers] = useState([]);
    const [state, dispatch] = useReducer(userReducer, {favs: initialFavState, theme: initialTheme});

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(()=>{
        axios(url)
        .then((res)=> setUsers(res.data))
        .catch((error)=>console.error("Error recuperando informacion", error));
    },[])
    useEffect(()=>{
        localStorage.setItem("favs", JSON.stringify(state.favs))
    },[state.favs]);

    const addUserToFavorites = (user) => {
        dispatch({ type: 'ADD_FAV', payload: user });
      };
    
    const removeUserFromFavorites = (userId) => {
        dispatch({ type: 'REMOVE_FAV', payload: userId });
      };
    
    const toggleTheme = () => {
      dispatch({type: "TOGGLE_THEME"});
    }


    return (
        <UserContext.Provider value={{users, favs:state.favs, theme: state.theme, addUserToFavorites,removeUserFromFavorites, toggleTheme}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);



































// import { createContext, useContext, useState, useReducer, useEffect} from "react";
// import axios from "axios";
// import { json } from "react-router-dom";

// export const initialState = {theme: "", data: []}

// /*export const ContextGlobal = createContext(undefined);

// export const ContextProvider = ({ children }) => {*/

// const DentistStates = createContext()
// const localFavs = JSON.parse(localStorage.getItem("favs"))
// const initialFavState = localFavs ? localFavs : []

// const Context = ({children}) => {
//   const [dentists, setDentists] = useState([])
//   const [favs, setFavs] = useState([])
//   const [theme, setTheme] = useState (true)

//   const url="https://jsonplaceholder.typicode.com/users"

//   useEffect(()=>{
//     axios(url)
//     .then(res=> setDentists(res.data.results))
//   }, [])

//   useEffect(()=>{
//     localStorage.setItem("favs", JSON.stringify(favs))
//   }, [favs])

//   return(
//     <DentistStates.Provider value={{dentists, favs, setFavs}}
//         {children}
//     </DentistStates.Provider>
//   )
// }
//  /* return (
//     <div>
//       <h2>Lista de Dentistas</h2>
//       {dentists.map((dentist) => (
//         <div key={dentist.id}>
//           <h3>{dentist.name}</h3>
//           <p>Email: {dentist.email}</p>
//         </div>
//       ))}
//     </div>
//   );*/

//  /*return (
//     <UserStates.Provider value={{dentists, setDentists, favs, setFavs}}>
//       {children}
//     </UserStates.Provider>
//   )
// }*/
// export default Context
// export const useDentistStates = () => useContext(DentistStates)
