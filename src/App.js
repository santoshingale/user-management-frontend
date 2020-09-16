import React, { useState } from 'react';
import './styles/App.scss';
import Login from './components/LoginPage'
import ForgetPaaword from './components/ForgetPaaword'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import useAuth from './components/useAuth'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import NewUser from './components/NewUser';
import UserList from './components/UserList';
import UpdateUserDetails from './components/UpdateUserDetails';
import { useSelector } from 'react-redux'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const user = useSelector(users => users.user)
  const { isAuthenticated, handleLogin, handleReset, handleLogout } = useAuth();
  const [userDetails, setUserDetails] = useState({})
  const [open, setOpen] = useState(false);

  const openSnackbar = async (userDetail) => {
    await setUserDetails(userDetail)
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUserDetails({})
    setOpen(false);
  };

  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="dashboard" />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} handleLogout={handleLogout} 
        componentName={[<div style={{ display: 'flex', flexDirection: 'column' }}><h3 className="welcome-header">Welcome {user[0]?.firstname}</h3><h4 className="last-login-header">You last logged in on  {user[0]?.lastLogin}</h4></div>]} />
        <ProtectedRoute exact path="/adduser" component={NewUser} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="New user" />
        <ProtectedRoute exact path="/userlist" component={UserList} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="Users" />
        <ProtectedRoute exact path="/updateuser" component={UpdateUserDetails} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="Users" />
        {/* <ProtectedRoute exact path="/home" component={Dashboard} isAuthenticated={isAuthenticated} /> */}

        <Route exact path="/login"
          component={(props) => <Login isAuthenticated={isAuthenticated}
            handleLogin={handleLogin} openSnackbar={openSnackbar} {...props} />} />

        <Route exact path="/forgetpassword"
          component={(props) => <ForgetPaaword isAuthenticated={isAuthenticated}
            handleReset={handleReset} {...props} />} />
      </Switch>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={userDetails?.status === 200 ? "success" : "error"}>
          {userDetails?.message}
        </Alert>
      </Snackbar>

    </Router>
  );
}

export default App;
