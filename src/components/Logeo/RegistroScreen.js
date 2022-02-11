import React from 'react'
import { Link } from "react-router-dom";
import { useForm} from '../../hook/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { setError } from '../../action/ui';
import { useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../action/auth';




export const RegistroScreen = () => {

  const dispatch =useDispatch();
  const {msgError} = useSelector(state => state.ui);

const [formValues, handleInputChange]=useForm ({

  name:"",
  email:"",
  password1:"",
  password2:""

}); 


const {name,email,password1,password2}=formValues;

const handleRegister=(e)=>{
  e.preventDefault();


if(isFormValid()){
 dispatch(startRegisterWithEmailPasswordName(email,password1,name));
}
}
const isFormValid =()=>{

if(name.trim().length ===0){
  dispatch(setError ('Nombre requerido'))
  return false;
}else if(!validator.isEmail(email)){
  dispatch(setError ('email no es valido'))

return false;
}else if(password1 !== password2 || password1.length < 5){
  dispatch(setError ('Contraseña debe tener mas de 6 caracteres'))
  return false;
}


return true;
}

  return (
    
      
    < >
      <h3 className='Autenticar__Titulo'>Registrar</h3>
      <form onSubmit={handleRegister}>
        {
          msgError &&
        (  
        <div className='auth__alert-error'>
{msgError}
        </div>
        )}
      <input 
        type="text"
        placeholder="Nombre"
        name="name"
        className="Autenticar__Entrada"
        autoComplete="off"
value={name}
onChange={handleInputChange}
        />
        <input 
        type="text"
        placeholder='Correo'
        name='email'
        className='Autenticar__Entrada'
        autoComplete='off'
        onChange={handleInputChange}
value={email}
        />
        <input 
        type="password"
        placeholder='Contraseña'
        name='password1'
        className='Autenticar__Entrada'
value={password1}
onChange={handleInputChange}
        />
        <input 
        type="password"
        placeholder='Confirmar'
        name='password2'
        className='Autenticar__Entrada'
        value={password2}
        onChange={handleInputChange}
        />
        
        <button type='submit' className='btn btn-primario btn-block mb-5' >Registrar</button>
       
        
        <Link to="/autenticacion/Logeo" className='link'>
Ya estas registrado?
        </Link>
      </form>
    </>
    
  )
}
