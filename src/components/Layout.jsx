import React from 'react'
import { Outlet, NavLink} from 'react-router-dom';



export default function Layout() {
  return (
    <>
    <header className='header'>
          <h1 className='header-title'>🗿 ToDoChad</h1>
          <div className='header-nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/todo'>ToDo</NavLink>
            <NavLink to='/about'>About</NavLink>   
          </div>
        </header>
        <main>
          <Outlet/>
        </main>

    </>
    
  )
}
