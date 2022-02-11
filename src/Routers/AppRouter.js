
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

  import { useDispatch } from "react-redux";

import { AppiCategorias } from '../components/AppiComponents/AppiCategorias';
import { firebase } from "../firebase/firebaseConfig";


import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { login } from '../action/auth';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {

  const dispatch = useDispatch();

  const [Checking,setChecking]=useState(true);
  const [IsLogin,setIsLogin]=useState(false);
  

useEffect(() => {
 
  firebase.auth().onAuthStateChanged((user=>{

    if( user?.uid ) {
dispatch(login(user.uid, user.displayName));
setIsLogin(true);
    }else{
setIsLogin(false)
    
    }
    setChecking(false);
  }))
}, [dispatch, setChecking,setIsLogin])

if(Checking){
  return(
    <h1>Espere</h1>
  )
}
  return (
    <Router>
    <div>
   
      
      <Switch>
        <PublicRoute  
        isAuthenticated={IsLogin}
        path="/autenticacion" 
        component={AuthRouter}
        />

        <PrivateRoute
        isAuthenticated={IsLogin}
        exact 
        path="/" 
       //component={InicioScreen}
       component={AppiCategorias}
        />

<Redirect to="/autenticacion/Logeo" />
      
      </Switch>
    </div>
  </Router>
  )
};
