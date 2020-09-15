import React, { useState, useEffect } from 'react'
import { ReactComponent as User } from '../assets/user.svg'
import gsap from 'gsap'
import apiService from '../helpers/apiService';

const StatusBar = () => {

    const [activeUsers, setActiveUsers] = useState(0)
    const [inactiveUsers, setInactiveUsers] = useState(0)
    const [totalUsers, setTotalUsers] = useState(0)
    const [onlineUsers, setOnlineUsers] = useState(0)
    useEffect(() => {
        async function fetchStatus() {
            await setTotalUsers(await (await apiService.get("/home/user/count")).data.object)
            await setActiveUsers(await (await apiService.get("home/dashboard?status=active")).data.object)
            await setInactiveUsers(await (await apiService.get("home/dashboard?status=inactive")).data.object)
            await setOnlineUsers(await (await apiService.get("home/dashboard/online")).data.object)
        }
        fetchStatus();
    }, [])

    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="status-holder">
                    <span className="rounded-avtar d-flex justify-content-center align-items-center">
                        <User />
                    </span>
                    <div className="right-side-avtar" >
                        <span className="total-title">
                            <b>TOTAL</b>
                        </span>
                        <span className="value-avtar">
                            {totalUsers}
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="status-holder">
                    <span style={{ backgroundColor: "#1DBB8E" }} className="rounded-avtar d-flex justify-content-center align-items-center">
                        <User />
                    </span>
                    <div className="right-side-avtar" >
                        <span className="total-title">
                            <b>ACTIVE</b>
                        </span>
                        <span className="value-avtar">
                            {activeUsers}
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="status-holder">
                    <span style={{ backgroundColor: "#ff4402" }} className="rounded-avtar d-flex justify-content-center align-items-center">
                        <User />
                    </span>
                    <div className="right-side-avtar">
                        <span className="total-title">
                            <b>INACTIVE</b>
                        </span>
                        <span className="value-avtar">
                            {inactiveUsers}
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="status-holder">
                    <span style={{ backgroundColor: "#F3BB23" }} className="rounded-avtar d-flex justify-content-center align-items-center">
                        <User />
                    </span>
                    <div className="right-side-avtar">
                        <span className="total-title">
                            <b>ONLINE</b>
                        </span>
                        <span className="value-avtar">
                            {onlineUsers}
                                </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatusBar
