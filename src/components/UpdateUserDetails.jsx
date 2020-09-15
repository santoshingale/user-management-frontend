import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import UserForm from './UserForm'
import apiService from '../helpers/apiService';

const UpdateUserDetails = () => {

    const location = useLocation();
    const initialValues = { ...location.state.user, confirmpassword: '' };
    let [permissions, setPermissions] = useState(initialValues.userPermission)
    var image = new Image();
    image.src = `http://localhost:8080/home/user/image/${initialValues.profilePic}`;
    const [dateOfBirth, setDateOfBirth] = useState(initialValues.dateOfBirth)

    const [isProfilePicChange, setIsProfilePicChange] = useState(false)
    const [profilePic, setProfilePic] = useState()
    const [permissionId, setPermissionId] = useState(initialValues.userPermission.id)

    const handleSubmit = async (props) => {
        permissions = {...permissions, id:permissionId}
        let payload = { ...props, userPermission: permissions, dateOfBirth: dateOfBirth }
        delete payload.confirmpassword
        console.log(payload)
        const path = "home/user/update";
        const formData = new FormData();
        if (isProfilePicChange) {
            formData.append('update', new Blob([JSON.stringify(payload)], { type: "application/json" }))
            formData.append('profilePic', profilePic);
        }
        else {
            formData.append('update', new Blob([JSON.stringify(payload)], { type: "application/json" }))
        }
        const resp = await apiService.postMultipart(path, formData)
    }

    return (
        <>
            {console.log(isProfilePicChange)}
            <UserForm
                permissions={permissions} setPermissions={setPermissions}
                initialValues={initialValues}
                dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth} handleSubmit={handleSubmit}
                profilePic={profilePic} setProfilePic={setProfilePic}
                setIsProfilePicChange={setIsProfilePicChange}
            />

        </>
    )
}

export default UpdateUserDetails

