import React, { useState } from 'react'
import UserForm from './UserForm'
import { initialValues } from "./formik/services/registerFormService";
import apiService from '../helpers/apiService';

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

    const [dateOfBirth, setDateOfBirth] = useState()
    const [profilePic, setProfilePic] = useState()


    const handleSubmit = async (props) => {
        let payload = { ...props, ...permissions }
        payload = { ...payload, dateOfBirth: dateOfBirth }
        delete payload.confirmpassword
        const path = "home/register";
        const formData = new FormData();
        formData.append('profilePic', profilePic);
        formData.append('register', JSON.stringify(payload))
        const resp = await apiService.postMultipart(path, formData)
    }
    
    return (
        <>
            <UserForm permissions={permissions} setPermissions={setPermissions} initialValues={initialValues} 
            dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth} handleSubmit={handleSubmit}
            profilePic={profilePic} setProfilePic={setProfilePic}/>
        </>
    )
}

export default NewUser
