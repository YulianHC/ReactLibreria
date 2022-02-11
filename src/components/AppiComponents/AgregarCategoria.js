import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AgregarCategoria = ({setCategorias}) => {

  const [ValorEntrada, setValorEntrada] = useState('');

  const CambioEntrada=(e)=>{
      setValorEntrada(e.target.value);
  }

  const EventoEnter=(e)=>{
e.preventDefault();

if ( ValorEntrada.trim().length > 1 ) {
   setCategorias(cats => [ValorEntrada ]); 
   setValorEntrada('');
}

  }

    return (
    <>
    <form onSubmit={EventoEnter} >
        <input
         
        className='padre hijo centrar'
        type="text"
        value={ValorEntrada}
        onChange={CambioEntrada}
        />

    </form>
        
    </>
  )
}

AgregarCategoria.propTypes={
    setCategorias:PropTypes.func.isRequired
}
