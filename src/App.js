import React, { useState } from 'react';
import './styles/App.scss';
// import Layout from './components/layout/Layout'
import Login from './components/LoginPage'
import ForgetPaaword from './components/ForgetPaaword'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import useAuth from './components/useAuth'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { isAuthenticated, handleLogin, handleLogout, handleReset } = useAuth();

  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="home" />
        <ProtectedRoute exact path="/home" isAuthenticated={isAuthenticated} />

        <Route exact path="/login"
          component={(props) => <Login isAuthenticated={isAuthenticated}
            handleLogin={handleLogin} {...props} />} />

        <Route exact path="/forgetpassword"
          component={(props) => <ForgetPaaword isAuthenticated={isAuthenticated}
          handleReset={handleReset} {...props} />} />

      </Switch>
    </Router>
  );
}

export default App;
