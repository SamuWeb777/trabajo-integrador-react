//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme === 'dark' ? '#333' : '#f8f9fa'};
  color: ${({ theme }) => theme === 'dark' ? '#f8f9fa' : '#333'};
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  list-style: none;
`;

const NavItem = styled.li`
  position: relative;
  padding-top: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.25rem;
    background-color: #6366f1; /* Color Indigo */
    transform: scaleX(${props => (props.active ? '1' : '0')});
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme === 'dark' ? '#d1d5db' : '#000'};
  &:hover {
    color: ${({ theme }) => theme === 'dark' ? '#f3f4f6' : '#333'};
  }
`;

const ThemeButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Navbar = () => {
  const location = useLocation()
  const {state, dispatch} = useContext(ContextGlobal)
  const [theme,setTheme] = useState(state.theme)
  
  useEffect(() => {
    if(theme === "dark"){
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
    }

  },[theme])

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    dispatch({type: 'CHANGE_THEME', payload: theme})
  }
  return (
    <NavContainer>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='hidden md:block'>
        <NavList className='flex gap-x-6 text-lg font-medium'>
          <NavItem className={`${location.pathname === '/' && 'after:absolute after:bottom-0 after:left-0 after:w-full after:bg-indigo-400 after:h-1'} pt-2 rounded-lg relative cursor-pointer group`}>
            <NavLink className='hover:text-black m-0 w-full h-full dark:hover:text-gray-300' to={'/'}>Inicio</NavLink>
            <span className="absolute bottom-0 left-0 w-full bg-indigo-400 h-1 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </NavItem>
          <NavItem className={`${location.pathname === '/contacto' && 'after:absolute after:bottom-0 after:left-0 after:w-full after:bg-indigo-400 after:h-1'} pt-2 rounded-lg relative cursor-pointer group`}>
            <NavLink className='hover:text-black m-0 w-full h-full dark:hover:text-gray-300' to={'/contacto'}>Contacto</NavLink>
            <span className="absolute bottom-0 left-0 w-full bg-indigo-400 h-1 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </NavItem>
          <NavItem className={`${location.pathname === '/favoritos' && 'after:absolute after:bottom-0 after:left-0 after:w-full after:bg-indigo-400 after:h-1'} pt-2 rounded-lg relative cursor-pointer group`}>
            <NavLink className='hover:text-black m-0 w-full h-full dark:hover:text-gray-300' to={'/favoritos'}>Favoritos</NavLink>
            <span className="absolute bottom-0 left-0 w-full bg-indigo-400 h-1 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </NavItem>
          
        </NavList>
      </div>
      <ThemeButton onClick={handleChangeTheme}>Change theme</ThemeButton>
    </NavContainer>
  );
};

export default Navbar;
