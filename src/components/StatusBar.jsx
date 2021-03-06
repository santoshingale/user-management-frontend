import React, { useState, useEffect } from 'react'
import { ReactComponent as User } from '../assets/user.svg'
import gsap from 'gsap'
import apiService from '../helpers/apiService'

// let tl = gsap.timeline();

// const homePageAnimation = () => {
//     tl.from(".rounded-avtar", 0.3,
//         {
//             scale: 1.05,
//             ease: "expo.inout",
//             yoyo: true,
//             repeat: 3
//         })
// }

const StatusBar = () => {

    const [activeUsers, setActiveUsers] = useState(0)
    const [inactiveUsers, setInactiveUsers] = useState(0)
    const [totalUsers, setTotalUsers] = useState(0)
    const [onlineUsers, setOnlineUsers] = useState(0)
    useEffect(() => {
        let mount = true;

        async function fetchStatus() {

            const _count = await apiService.get("/home/user/count");
            const _active = await apiService.get("home/dashboard?status=active");
            const _inactive = await apiService.get("home/dashboard?status=inactive");
            const _online = await apiService.get("home/dashboard/online");

            if (mount) {
                setTotalUsers(_count.data.object);
                setActiveUsers(_active.data.object);
                setInactiveUsers(_inactive.data.object);
                setOnlineUsers(_online.data.object);
            }
        }
        fetchStatus();
        return () => {
            mount = false;
        }
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
