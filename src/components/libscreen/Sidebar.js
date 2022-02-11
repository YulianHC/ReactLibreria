import React from 'react'

export const Sidebar = () => {
  return (
   <aside className='Inicio__sidebar'>
<div className='Inicio__sidebar-navbar'>
    <h3 className='mt-5'>
    
        <span>Yulian</span>
        <i class="fa-thin fa-circle-user"></i>
    </h3>
    <button className='btn'>
        Cerrar sesion
    </button>

    
    </div>
    <div className='Inicio__newEntry'>

<p className='mt-5'>
Entrada
</p>
    </div>
   </aside>
  )
}
