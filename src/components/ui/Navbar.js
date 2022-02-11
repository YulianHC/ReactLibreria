import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        
        <nav>
  <ul className="menu">
      <li>LibroAbierto</li>
    <li><a href="/Logeo">Logeo</a></li>
    <li><a href="/Registro">Registro</a></li>
    
  </ul>
   </nav>

    )
}