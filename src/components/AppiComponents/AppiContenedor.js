import React from 'react'

export const AppiContenedor = (props) => {
    console.log(props);
  return (
    <div >
        <p>{props.title}</p>
        <p>Autor: {props.autor}</p>

        <img src={props.url} alt={props.title}   />
        
    </div>
  )
}
