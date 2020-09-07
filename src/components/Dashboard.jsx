import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar';
import NewUser from './NewUser';
import '../styles/navbar.scss'
const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [isNavbarFull, setIsNavbarFull] = useState(true)

    const halfNavNab = () => setIsNavbarFull(!isNavbarFull);

    return (
        <div className="dashboard">
            <div class="wrapper d-flex align-items-stretch">
                <Header showSidebar={showSidebar} sidebar={sidebar} />

                <Navbar sidebar={sidebar} isNavbarFull={isNavbarFull} halfNavNab={halfNavNab} />

                <div className="container-fluid">
                    <div className=" first-div">
                        <div className="col-md-12">
                            <h5>New user</h5>
                        </div>
                    </div>

                    <NewUser />

                </div>
            </div>
        </div>
    )
}

export default Dashboard
