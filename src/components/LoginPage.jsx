import React, { useState, useEffect } from 'react'
import mi from '../assets/mi.jpg'
import Button from 'react-bootstrap/Button';
import { useHistory, useLocation } from 'react-router-dom';


const LoginPage = ({ handleLogin, isAuthenticated, openSnackbar }) => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { to } = location.state || { to: { pathname: "/forgetpassword" } };

    useEffect(() => {
        if (isAuthenticated) {
            history.replace(from);
        }
    }, [isAuthenticated]);

    const [loginDetails, setLoginDetails] = useState({ username: "", password: "", rememberMe: false })
    const [error, setError] = useState(false)
    const [userDetails, setUserDetails] = useState({});
    const  handleSubmit = async () => {
        (loginDetails.username !== "" && loginDetails.password !== "") ?
            await openSnackbar(await handleLogin(loginDetails)) :
            setError(true)
    }

    return (
        <div className="login">
            <div className="container">
                <div className="form_container ">
                    <div className="login_form">
                        <div className="mi_image_div">
                            <img src={mi} alt="" />
                        </div>
                        <h3>Login to your account</h3>

                        <input type="text" id="username" placeholder="Username"
                            className="form-control" aria-describedby="emailHelp"
                            onBlur={(input) => setLoginDetails({ ...loginDetails, username: input.target.value })} />
                        {error === true && loginDetails.username.length === 0 ? <p >Username is required.</p> : <></>}

                        <input type="text" id="password" placeholder="Password"
                            className="form-control" aria-describedby="emailHelp"
                            onBlur={(input) => setLoginDetails({ ...loginDetails, password: input.target.value })} />

                        {error === true && loginDetails.password.length === 0 ? <p >The password is required.</p> : <></>}

                        <div className='custom-control custom-switch'>
                            <input
                                type='checkbox'
                                className='custom-control-input'
                                id='customSwitchesChecked'
                                checked={loginDetails.rememberMe}
                                onChange={(event) => setLoginDetails({ ...loginDetails, rememberMe: event.target.checked })}
                            />
                            <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                                Remember me
                            </label>
                        </div>
                        <Button variant="primary" size="lg" block onClick={() => handleSubmit()}>
                            LOGIN
                        </Button>
                        <div className="forgetpass"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                            <path fillRule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                        </svg>
                            <p onClick={() => history.replace(to)}> Forgot password?</p>
                        </div>
                    </div>
                    <div className="login_side_div">
                        <div className="login_side_dive_sub">
                            <h3>User Management</h3>
                            <h4>Version 2.2</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
