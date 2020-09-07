import React, { useState } from 'react'

const Permisions = () => {

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

    const handleChange = (event) => {
        setPermissions({ ...permissions, [event.target.name]: event.target.checked });
    };

    const handleSelectAll = (event) => {
            for (var k in permissions) {
                if (k.includes("add")) {
                    console.log(k)
                    let timerId = setInterval(() => {
                    setPermissions(prevState=>({ ...prevState, [k]: true }));
                    }, 200)
                }
            }
        
    }

    return (
        <div>
            <div className="container-fluid background-white margin-20px padding-20px">
                <div className="form-row">
                    <div className="form-group col-md-12 ">
                        <h5>General</h5>
                    </div>
                </div>
                <div className="form-row">
                    <div className="table-responsive">
                        {/* {console.log(permissions)} */}
                        <table className="table">

                            <tr>
                                <th className="tableHeader">Webpage</th>
                                <th className="th-lg"><input className="form-check-input" type="checkbox" name="add" onChange={handleSelectAll} /> Add</th>
                                <th className="th-lg"><input className="form-check-input" type="checkbox" name="delete" onChange={handleSelectAll} /> Delete</th>
                                <th className="th-lg"><input className="form-check-input" type="checkbox" name="modify" onChange={handleSelectAll} /> Modify</th>
                                <th className="th-lg"><input className="form-check-input" type="checkbox" name="read" onChange={handleSelectAll} /> Read</th>
                            </tr>

                            <tr>
                                <td className="tableHeader">
                                    Dashboard</td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.addDashboard} type="checkbox" name="addDashboard" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.deleteDashboard} type="checkbox" name="deleteDashboard" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.modifyDashboard} type="checkbox" name="modifyDashboard" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.readDashboard} type="checkbox" name="readDashboard" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">Settings</td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.addSettings} type="checkbox" name="addSettings" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.deleteSettings} type="checkbox" name="deleteSettings" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.modifySettings} type="checkbox" name="modifySettings" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.readSettings} type="checkbox" name="readSettings" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">Users Information</td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.addUsersInformation} type="checkbox" name="addUsersInformation" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.deleteUsersInformation} type="checkbox" name="deleteUsersInformation" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.modifyUsersInformation} type="checkbox" name="modifyUsersInformation" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.readUsersInformation} type="checkbox" name="readUsersInformation" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">Web Page 1</td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.addWebPage1} type="checkbox" name="addWebPage1" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.deleteWebPage1} type="checkbox" name="deleteWebPage1" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.modifyWebPage1} type="checkbox" name="modifyWebPage1" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.readWebPage1} type="checkbox" name="readWebPage1" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">
                                    Web Page 2</td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.addWebPage2} type="checkbox" name="addWebPage2" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.deleteWebPage2} type="checkbox" name="deleteWebPage2" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.modifyWebPage2} type="checkbox" name="modifyWebPage2" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.readWebPage2} type="checkbox" name="readWebPage2" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">
                                    Web Page 3</td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.addWebPage3} type="checkbox" name="addWebPage3" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.deleteWebPage3} type="checkbox" name="deleteWebPage3" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.modifyWebPage3} type="checkbox" name="modifyWebPage3" onChange={handleChange} /> </td>
                                <td className="th-lg"><input className="form-check-input" checked={permissions.readWebPage3} type="checkbox" name="readWebPage3" onChange={handleChange} /> </td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permisions
