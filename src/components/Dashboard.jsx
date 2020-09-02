import React,{useState} from 'react'
import Header from './Header'
import Navbar from './Navbar';

const Dashboard = () => {
    const[state,setState] = useState(false);

    return (
        <div>
            <Header/>
            <Navbar/>
                    </div>
    )
}

export default Dashboard
