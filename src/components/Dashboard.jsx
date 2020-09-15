import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import apiService from '../helpers/apiService';
import StatusBar from './StatusBar';
import Chart from './Chart';
import Moment from 'react-moment';

let tl = gsap.timeline();

// const homePageAnimation = () => {
//     tl.from(".rounded-avtar", 0.3,
//         {
//             scale: 1.05,
//             ease: "expo.inout",
//             yoyo: true,
//             repeat: 3
//         })
// }
const Dashboard = () => {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        async function fetchList() {
            const list = await apiService.get('home/user/recent-registration')
            setUsersList(list.data.object)
        }
        fetchList();
    }, [])


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <StatusBar />
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="panel">
                            <div className="pannel-holding">
                                <h5 className="heading-dashboard">All Time Registration History</h5>
                            </div>
                            <div className="pannel-body">
                                <div className="row">
                                    <Chart casesType="cases" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="panel">
                            <div className="pannel-holding">
                                <h5 className="heading-dashboard">Latest Registration</h5>
                            </div>
                            <div className="pannel-body">
                                <div className="row">
                                    <div className="col-sm-12 table-holder">
                                        <table className="table-responsive">
                                            <tbody>

                                                {usersList.map((user) => {
                                                    const userPic = `http://localhost:8080/home/user/image/${user.profilePic}`

                                                    return < tr >
                                                        <td>
                                                            <div className="table-data">
                                                                <img src={userPic} alt="pic" className="user-picture" />
                                                                <div className="name-registration">
                                                                    <h4 className="heading-list-name">
                                                                        {user.firstname} {user.middlename} {user.lastname}
                                                                    </h4>
                                                                    <h4 className="heading-list-time">
                                                                        <Moment format="MMM DD YYYY h:mm A">
                                                                            {user.registrationDate}
                                                                        </Moment>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
