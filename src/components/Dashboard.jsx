import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar';



const Dashboard = () => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="dashboard">
            <Header showSidebar={showSidebar} />
            <Navbar sidebar={sidebar} />
            
        </div>
    )
}

export default Dashboard
