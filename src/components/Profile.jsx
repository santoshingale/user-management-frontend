import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as Time } from '../assets/time.svg'
import Moment from 'react-moment';

const Profile = () => {
    const user = useSelector(users => users.user)
    const [generalInfo, setGeneralInfo] = useState(true)

    return (
        <div className="col-lg-12 profile-body">
            <div className="row">
                <div className="col-lg-4 col-md-12 profile-left">
                    <div className="profile-pic-div">
                        <img src={`http://localhost:8080/home/user/image/${user?.profilePic}`} alt="profile" />
                        <h4 style={{ color: "white" }}>{user?.firstname}  {user?.lastname}</h4>
                    </div>
                    <div className="profile-info-div">
                        <h4>
                            Basic Info
                        </h4>
                        <h3>
                            <span> Email: </span> <span>{user?.email}</span>
                        </h3>
                        <h3>
                            <span> Username </span> <span>{user?.username}</span>
                        </h3>
                        <div className="button-edit-profile">
                            <Link to={{
                                pathname: "/updateuser",
                                state: {
                                    user: user
                                }
                            }}>
                                <Button>
                                    Edit Profile
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="col-lg-8 profile-right">
                    <div className="tab-profile-info">
                        <Button className={generalInfo ? "active-button" : " "} onClick={() => setGeneralInfo(true)}>General Information</Button>
                        <Button className={generalInfo ? "" : "active-button"} onClick={() => setGeneralInfo(false)}>Login History</Button>
                    </div>
                    {generalInfo ? <div className="profile-details">
                        <h3>
                            <span> First name: </span> <span>{user?.firstname}</span>
                        </h3>
                        <h3>
                            <span> Middle name </span> <span>{user?.middlename}</span>
                        </h3>
                        <h3>
                            <span> Last name </span> <span>{user?.lastname}</span>
                        </h3>
                        <h3>
                            <span> Date of birth </span> <span>{user?.dataOfBirth}</span>
                        </h3>
                        <h3>
                            <span> Country </span> <span>{user?.country}</span>
                        </h3>
                        <h3>
                            <span> Phone </span> <span>{user?.phone}</span>
                        </h3>

                        <h3>
                            <span> Username </span> <span>{user?.username}</span>
                        </h3>
                        <h3>
                            <span> Address </span> <span>{user?.address}</span>
                        </h3>
                    </div> :
                        <div className="profile-details">
                            <h3>
                                <span style={{ fontStyle: 'italic' }}> <Time />  Login history is displayed prior to the last login </span>
                            </h3>

                            {user?.lastLogin?.slice(0).reverse().map((loginHistory) => <h3>
                                <span> {'>'} <Moment format="MMM DD YYYY h:mm:ss A">
                                {loginHistory["loginTime"]}
                                </Moment> </span>
                            </h3>)}
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Profile
