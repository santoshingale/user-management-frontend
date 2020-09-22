import React, { useState } from 'react';
import './styles/App.scss';
import Login from './components/LoginPage'
import ForgetPaaword from './components/ForgetPaaword'
import Profile from './components/Profile'
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
import moment from 'moment'
import Webpage1 from './components/Webpage1';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const user = useSelector(users => users?.user)
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
    setOpen(false);
    setUserDetails({})
  };
  let lastLogin = (user === undefined || user === null || user.lastLogin === undefined) ? '' :
    moment(user.lastLogin[user.lastLogin.length - 1]["loginTime"]).format('MMM DD YYYY h:mm:ss A');

  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="dashboard" />
        <ProtectedRoute key="dashboard" exact path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} handleLogout={handleLogout}
          componentName={[<div style={{ display: 'flex', flexDirection: 'column' }}><h3 className="welcome-header">Welcome {user?.firstname}</h3><h4 className="last-login-header">You last logged in on {lastLogin} </h4></div>]} />

        <ProtectedRoute key="adduser" exact path="/adduser" component={NewUser} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="New user" />

        <ProtectedRoute key="userlist" exact path="/userlist" component={UserList} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="Users" />

        <ProtectedRoute key="updateuser" exact path="/updateuser" component={UpdateUserDetails} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="Users" />

        <ProtectedRoute key="profile" exact path="/profile" component={Profile} isAuthenticated={isAuthenticated} handleLogout={handleLogout}
          componentName={[<div style={{ display: 'flex', flexDirection: 'column' }}><h3 className="welcome-header">Profile</h3><h4 className="last-login-header">You last logged in on  {lastLogin}</h4></div>]} />

        <ProtectedRoute key="webpage1" exact path="/webpage1" component={(props) => <Webpage1 page="WebPage1" />} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="Users"
          componentName={[<div style={{ display: 'flex', flexDirection: 'column' }}><h3 className="welcome-header">Webpage 1</h3><h4 className="last-login-header">Permissions granted for webpage 1</h4></div>]} />/>

        <ProtectedRoute key="webpage1" exact path="/webpage2" component={(props) => <Webpage1 page="WebPage2" />} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="Users"
          componentName={[<div style={{ display: 'flex', flexDirection: 'column' }}><h3 className="welcome-header">Webpage 2</h3><h4 className="last-login-header">Permissions granted for webpage 2</h4></div>]} />/>

        <ProtectedRoute key="webpage1" exact path="/webpage3" component={(props) => <Webpage1 page="WebPage3" />} isAuthenticated={isAuthenticated} handleLogout={handleLogout} componentName="Users"
          componentName={[<div style={{ display: 'flex', flexDirection: 'column' }}><h3 className="welcome-header">Webpage 3</h3><h4 className="last-login-header">Permissions granted for webpage 3</h4></div>]} />/>

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
