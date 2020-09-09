import React, { useState } from 'react'
import UserForm from './UserForm'

const NewUser = () => {

    const [permissions, setPermissions] = useState({
        addDashboard: false,
        deleteDashboard: false,
        modifyDashboard: false,
        readDashboard: false,

        addSettings: false,
        deleteSettings: false,
        modifySettings: false,
        readSettings: false,

        addUsersInformation: false,
        deleteUsersInformation: false,
        modifyUsersInformation: false,
        readUsersInformation: false,

        addWebPage1: false,
        deleteWebPage1: false,
        modifyWebPage1: false,
        readWebPage1: false,

        addWebPage2: false,
        deleteWebPage2: false,
        modifyWebPage2: false,
        readWebPage2: false,

        addWebPage3: false,
        deleteWebPage3: false,
        modifyWebPage3: false,
        readWebPage3: false,
    })

    

    return (
        <>
            <UserForm permissions={permissions} setPermissions={setPermissions}/>
        </>
    )
}

export default NewUser
