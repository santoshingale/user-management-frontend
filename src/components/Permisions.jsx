import React, { useState } from 'react'

const Permisions = () => {

    const [permissions, setPermissions] = useState({
        AddDashboard: false,
        DeleteDashboard: false,
        ModifyDashboard: false,
        ReadDashboard: false,

        AddSettings: false,
        DeleteSettings: false,
        ModifySettings: false,
        ReadSettings: false,

        AddUsersInformation: false,
        DeleteUsersInformation: false,
        ModifyUsersInformation: false,
        ReadUsersInformation: false,

        AddWebPage1: false,
        DeleteWebPage1: false,
        ModifyWebPage1: false,
        ReadWebPage1: false,

        AddWebPage2: false,
        DeleteWebPage2: false,
        ModifyWebPage2: false,
        ReadWebPage2: false,

        AddWebPage3: false,
        DeleteWebPage3: false,
        ModifyWebPage3: false,
        ReadWebPage3: false,


    })

    const handleChange = async (event) => {
        await setPermissions({ ...permissions, [event.target.name]: event.target.checked });
    };

       const handleSelectAll = (event) => {
            for (var k in permissions) {
                if (k.includes(event.target.name)) {
                    console.log(k)
                    setPermissions(prevState=> ({ ...prevState, [k]: true }))
                }
            }
        }


    // const keys = ["AddDashboard", "DeleteDashboard", "ModifyDashboard", "ReadDashboard", "AddSettings", "DeleteSettings", "ModifySettings", "ReadSettings",
    //     "AddUsersInformation", "DeleteUsersInformation", "ModifyUsersInformation", "ReadUsersInformation", "AddWebPage1", "DeleteWebPage1", "ModifyWebPage1", "ReadWebPage1",
    //     "AddWebPage2", "DeleteWebPage2", "ModifyWebPage2", "ReadWebPage2", "AddWebPage3", "DeleteWebPage3", "ModifyWebPage3", "ReadWebPage3"]

    // const handleSelectAll = (event) => {
    //     var k = event.target.name - 1;
    //     console.log(k)

    //     for (k; k < keys.length; k += 4) {
    //         console.log(keys[k])
    //         setPermissions(prevPermissions => ({ ...prevPermissions, [keys[k]]: true }))
    //     }
    // }



    return (
        <div>
            <div className="container-fluid background-white margin-20px padding-20px">
                <div className="form-row">
                    <div className="form-group col-md-12 ">
                        <h5>General</h5>
                    </div>
                </div>
                <div className="form-row">
                    <div class="table-responsive">

                        <table class="table">

                            <tr>
                                <th className="tableHeader">Webpage</th>
                                <th className="th-lg"><input class="form-check-input" type="checkbox" name="1" onChange={handleSelectAll} /> Add</th>
                                <th className="th-lg"><input class="form-check-input" type="checkbox" name="2" onChange={handleSelectAll} /> Delete</th>
                                <th className="th-lg"><input class="form-check-input" type="checkbox" name="Modify" onChange={handleSelectAll} /> Modify</th>
                                <th className="th-lg"><input class="form-check-input" type="checkbox" name="Read" onChange={handleSelectAll} /> Read</th>
                            </tr>

                            <tr>
                                <td className="tableHeader">
                                    Dashboard</td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.AddDashboard} type="checkbox" name="AddDashboard" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.DeleteDashboard} type="checkbox" name="DeleteDashboard" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ModifyDashboard} type="checkbox" name="ModifyDashboard" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ReadDashboard} type="checkbox" name="ReadDashboard" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">Settings</td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.AddSettings} type="checkbox" name="AddSettings" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.DeleteSettings} type="checkbox" name="DeleteSettings" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ModifySettings} type="checkbox" name="ModifySettings" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ReadSettings} type="checkbox" name="ReadSettings" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">Users Information</td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.AddUsersInformation} type="checkbox" name="AddUsersInformation" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.DeleteUsersInformation} type="checkbox" name="DeleteUsersInformation" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ModifyUsersInformation} type="checkbox" name="ModifyUsersInformation" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ReadUsersInformation} type="checkbox" name="ReadUsersInformation" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">Web Page 1</td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.AddWebPage1} type="checkbox" name="AddWebPage1" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.DeleteWebPage1} type="checkbox" name="DeleteWebPage1" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ModifyWebPage1} type="checkbox" name="ModifyWebPage1" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ReadWebPage1} type="checkbox" name="ReadWebPage1" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">
                                    Web Page 2</td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.AddWebPage2} type="checkbox" name="AddWebPage2" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.DeleteWebPage2} type="checkbox" name="DeleteWebPage2" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ModifyWebPage2} type="checkbox" name="ModifyWebPage2" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ReadWebPage2} type="checkbox" name="ReadWebPage2" onChange={handleChange} /> </td>
                            </tr>

                            <tr>
                                <td className="tableHeader">
                                    Web Page 3</td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.AddWebPage3} type="checkbox" name="AddWebPage3" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.DeleteWebPage3} type="checkbox" name="DeleteWebPage3" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ModifyWebPage3} type="checkbox" name="ModifyWebPage3" onChange={handleChange} /> </td>
                                <td className="th-lg"><input class="form-check-input" checked={permissions.ReadWebPage3} type="checkbox" name="ReadWebPage3" onChange={handleChange} /> </td>
                            </tr>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permisions
