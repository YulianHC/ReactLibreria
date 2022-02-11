import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../action/auth';
import { AgregarCategoria } from './AgregarCategoria';
import { AppiConeccion } from './AppiConeccion';


export const AppiCategorias = () => {

  const dispatch = useDispatch();
  const handleLogout=()=>{
dispatch(startLogout())
  }

    const [Categorias,setCategorias]=useState (['']);

  return (
    
    <div className='centrar'>
      <button onClick={handleLogout} className=''> Cerrar Sesion</button>
        <h1 className='title' >Libro Abierto</h1>
        
        <div className=''>

          

        <AgregarCategoria setCategorias={setCategorias} />
        <hr />
        <ol >
            {
                Categorias.map(categoria => (
                <AppiConeccion 
                key={categoria}
                categoria={categoria}
               
                 />
                ))
            }
        </ol>

        </div>
        
    </div>
  )
}
