import { createContext, useEffect, useReducer } from "react";

export const initialState = {theme: "light", data: [], favs: []}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favs: state.favs.filter(fav => fav.id !== action.payload.id) };
    default:
      return state;
  }
}
export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  useEffect(() => {
    fetch('/api/professionals')
    .then(response => response.json())
    .then(data => dispatch({type: 'SET_DATA', payload: data}))
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  const contextValue = {
    state,
    toogleTheme: () => dispatch({ type: 'TOGGLE_THEME'}),
    addFav: (professional) => dispatch({ type: 'ADD_FAV', payload: professional}),
    removeFav: (professional) => dispatch({type: 'REMOVE_FAV', payload: professional}),

  }
  
  
  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
