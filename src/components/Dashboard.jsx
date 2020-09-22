import React, { useState, useEffect } from 'react'
import apiService from '../helpers/apiService';
import StatusBar from './StatusBar';
import Chart from './Chart';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        let mounted = true;
        async function fetchList() {
            const list = await apiService.get('home/user/recent-registration');
            if (mounted) { setUsersList(list.data.object) }
        }
        fetchList();
        return ()=> {mounted = false}
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
                                <Link to="/userlist">
                                    <span >Load more </span>
                                </Link>
                            </div>
                            <div className="pannel-body">
                                <div className="row">
                                    <div className="col-sm-12 table-holder">
                                        <table className="table-responsive">
                                            <tbody>

                                                {usersList.map((user) => {
                                                    const userPic = `http://localhost:8080/home/user/image/${user.profilePic}`

                                                    return < tr key={user.id}>
                                                        <td >
                                                            <div className="table-data">
                                                                <img src={userPic} alt="pic" className="user-picture" />
                                                                <div className="name-registration">
                                                                    <h4 className="heading-list-name">
                                                                        {user.firstname} {user.middlename} {user.lastname}
                                                                    </h4>
                                                                    <h4 className="heading-list-time">
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
