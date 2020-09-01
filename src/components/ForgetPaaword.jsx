import React, { useState, useEffect } from 'react'
import mi from '../assets/mi.jpg'
import { Alert, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';


const ForgetPaaword = ({ handleReset, isAuthenticated }) => {
    const [error, setError] = useState(false)
    const [email, setLoginDetails] = useState("")

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { to } = location.state || { to: { pathname: "/login" } };


    useEffect(() => {
        if (isAuthenticated) {
            history.replace(from);
        }
    }, [isAuthenticated]);

    const handleSubmit = () => {
        (email !== "") ?
            handleReset(email) :
            setError(true)
    }

    const loginPage = () => {
        console.log("hiii here")
        history.replace(to);
    }

    return (
        <div className="forgetPass">
            <div className="container">
                <div className="form_container " >
                    <div className="mi_image_div">
                        <img src={mi} alt="" />
                    </div>
                    <h3>
                        Recover Password
                        </h3>
                    <Alert variant='primary' className="alert_box">
                        Please enter your email address below to receive the password at your
                        registered email.
                    </Alert>
                    <input type="text" id="username" name="fname" placeholder="Email"
                        class="form-control" aria-describedby="emailHelp"
                        onBlur={(input) => setLoginDetails(input.target.value)} />
                    {error === true ? <p >Email is required.</p> : <></>}
                    <Button variant="primary" size="lg" block onClick={() => handleSubmit()}>
                        RECOVER PASSWORD
                        </Button>
                        <div className="loginBack">
                            <p>Know your password? <span onClick={()=>history.replace(to)}>Login</span></p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPaaword
