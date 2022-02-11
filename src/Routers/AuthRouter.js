import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { LogeoScreen } from '../components/Logeo/LogeoScreen';
import { RegistroScreen } from '../components/Logeo/RegistroScreen';

export const AuthRouter = () => {
  return (
    <div className='Autenticar__Principal'>
      <div className='Autenticar__contenedor'>
        <Router>
      <Switch>
    <Route 
    exact
    path="/autenticacion/Logeo"
    component={LogeoScreen}
    />

    <Route 
    exact
    path="/autenticacion/Registro"
    component={RegistroScreen}
    />

    <Redirect to="/autenticacion/Logeo" />

</Switch>
</Router>
      </div>


    </div>
  )
}
