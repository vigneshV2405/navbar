import React, { useState } from 'react';
import './navbar.css'
import { NavLink , Link } from 'react-router-dom';

function Navbar() {
    const [ menuOpened , setMenuopened ] = useState(false)

  return (
    <nav className='navbar' >
        <Link className='title' to='/' >Website Name</Link>
        <div className='menu' onClick={()=>{setMenuopened(!menuOpened)}} >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpened?'open':''} >
            <li>
                <NavLink to='/about' >About</NavLink>
            </li>
            <li>
                <NavLink to='/contactus'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/services'>Services</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar