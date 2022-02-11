import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {  starGoogleLogin, startloginEmailPassword } from '../../action/auth';
import { useForm } from '../../hook/useForm';



export const LogeoScreen = () => {

  const dispatch =useDispatch(); 
  const {loading} = useSelector( state => state.ui );

  const [formValues, handleInputChange]=useForm({
    email:[],
    password:[]
  });

  const{email,password}=formValues;
console.log(formValues);

  const handlelogin =(e)=>{
    e.preventDefault();
dispatch(startloginEmailPassword(email, password));
  }
  const handelGoogleLogin = ()=>{
    dispatch(starGoogleLogin());
  }

  return (
      <>
      
    
      <h3 className='Autenticar__Titulo'>Ingresar </h3>

      <form onSubmit={handlelogin}>
        <input 
        type="text"
        placeholder="Correo"
        name="email"
        className="Autenticar__Entrada"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
        
        />
        <input 
        type="password"
        placeholder='Contraseña'
        name='password'
        className='Autenticar__Entrada'
        value={password}
        onChange={handleInputChange}
        />
        <button type='submit' className='btn btn-primario btn-block mb-5 ' disabled={loading}>Ingresar  </button>
        <div className='Autenticar__red-social'>
          <p>Ingresar con Google</p>
          <div 
    className="google-btn"
    onClick={handelGoogleLogin}
>
    <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
    </div>
    <p className="btn-text">
        <b>Sign in with google</b>
    </p>
</div> 
        </div>
        <Link to="/autenticacion/Registro" className='link'>
        Crear nueva Cuenta
        </Link>
      </form>
    </>
    
  )
}
