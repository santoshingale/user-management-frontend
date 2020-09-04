import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar';
import NewUser from './NewUser';

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [isNavbarFull, setIsNavbarFull] = useState(true)

    const halfNavNab = () => setIsNavbarFull(!isNavbarFull);

    return (
        <div className="dashboard">
            <Header showSidebar={showSidebar} />
            {console.log(isNavbarFull)}
            <Navbar sidebar={sidebar} isNavbarFull={isNavbarFull} halfNavNab={halfNavNab} />
            <div className={!sidebar ? 'container-fluid ' : isNavbarFull ? 'container-fluid active' : 'container-fluid half-navbar'}>
                <div className="row first-div">
                    <div className="col-md-12">
                        <h5>New user</h5>
                    </div>
                </div>

                <NewUser/>

            </div>
        </div>
    )
}

export default Dashboard
