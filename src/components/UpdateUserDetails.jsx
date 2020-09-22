import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import UserForm from './UserForm'
import apiService from '../helpers/apiService';

const UpdateUserDetails = () => {

    const location = useLocation();
    const initialValues = { ...location.state.user, confirmpassword: '' };
    const [_status, setStatus] = useState((location.state.user.worongLoginAttempt < 3) ? true :false)
    const [worongLoginAttempt, setStatusValue] = useState(location.state.user.worongLoginAttempt);

    let [permissions, setPermissions] = useState(initialValues.userPermission)
    var image = new Image();
    image.src = `http://localhost:8080/home/user/image/${initialValues.profilePic}`;
    const [dateOfBirth, setDateOfBirth] = useState(initialValues.dateOfBirth)

    const [isProfilePicChange, setIsProfilePicChange] = useState(false)
    const [profilePic, setProfilePic] = useState()
    const permissionId = initialValues.userPermission.id;

    const handleSubmit = async (props) => {
        permissions = { ...permissions, id: permissionId }
        let payload = { ...props, userPermission: permissions, dateOfBirth: dateOfBirth, worongLoginAttempt: worongLoginAttempt }
        delete payload.confirmpassword
        const path = "home/user/update";
        const formData = new FormData();
        formData.append('update', new Blob([JSON.stringify(payload)], { type: "application/json" }))
        formData.append('profilePic', profilePic);
        await apiService.postMultipart(path, formData)
    }

    const handleStatus =(event)=> {
        if(event.target.checked){
            setStatus(true)
            setStatusValue(0)
        }
        else{
            setStatus(false)
            setStatusValue(3)
        }
    }

    return (
        <>
            <UserForm
                permissions={permissions} setPermissions={setPermissions}
                initialValues={initialValues}
                dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth} handleSubmit={handleSubmit}
                profilePic={profilePic} setProfilePic={setProfilePic}
                isProfilePicChange={isProfilePicChange}
                setIsProfilePicChange={setIsProfilePicChange}
                status={_status}
                handleStatus={handleStatus}
            />

        </>
    )
}

export default UpdateUserDetails

