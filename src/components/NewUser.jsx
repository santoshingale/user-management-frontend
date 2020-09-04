import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker';
import UploadImage from '../assets/upload-image.png'
import { Form, Formik } from "formik";
import { FormikTextField, FormikTextarea, FormikSelect } from "./formik";
import { Button } from "@material-ui/core";
import { formSchema, initialValues } from "./formik/services/loginFormService";
import axios from 'axios'

const NewUser = () => {

    const [countries, setCountries] = useState([]);

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

    // const { AddDashboard, DeleteDashboard, ModifyDashboard, ReadDashboard, AddSettings, DeleteSettings, ModifySettings, ReadSettings,
    //     AddUsersInformation, DeleteUsersInformation, ModifyUsersInformation, ReadUsersInformation, AddWebPage1, DeleteWebPage1, ModifyWebPage1, ReadWebPage1,
    //     AddWebPage2, DeleteWebPage2, ModifyWebPage2, ReadWebPage2, AddWebPage3, DeleteWebPage3, ModifyWebPage3, ReadWebPage3, } = permissions;

    const handleChange = async (event) => {
        await setPermissions({ ...permissions, [event.target.name]: event.target.checked });
    };


    // const handleSelectAll = (event) => {
    //     for (var k in permissions) {
    //         if (k.includes(event.target.name)) {
    //             console.log([k])
    //             setPermissions({ ...permissions, [k]: event.target.checked })
    //         }
    //     }
    // }

    const keys = ["AddDashboard", "DeleteDashboard", "ModifyDashboard", "ReadDashboard", "AddSettings", "DeleteSettings", "ModifySettings", "ReadSettings",
        "AddUsersInformation", "DeleteUsersInformation", "ModifyUsersInformation", "ReadUsersInformation", "AddWebPage1", "DeleteWebPage1", "ModifyWebPage1", "ReadWebPage1",
        "AddWebPage2", "DeleteWebPage2", "ModifyWebPage2", "ReadWebPage2", "AddWebPage3", "DeleteWebPage3", "ModifyWebPage3", "ReadWebPage3"]

    const handleSelectAll = (event) => {
        var k = event.target.name - 1;
        console.log(k)

        for (k; k < keys.length; k += 4) {
            console.log(keys[k])
            setPermissions({ ...permissions, [keys[k]]: true })
        }
    }


    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(res => {
                const countries = res.data.map((country) => ({
                    value: country.country,
                }));
                setCountries(countries)
            })
    }, [])

    const handlelogin = (props) => {
        console.log(props)
    }

    return (
        <>
            <Formik initialValues={initialValues}
                onSubmit={handlelogin}
                validationSchema={formSchema}>
                {
                    (props) => {
                        const {
                            isValid,
                        } = props;
                        return (
                            <Form>

                                <div className="row flex-space-evenly">
                                    <div className="col-md-8" style={{ marginRight: "-25px" }}>

                                        <div className="container-fluid background-white margin-20px padding-20px">

                                            <div className="form-row">
                                                <div className="form-group col-md-4 ">
                                                    <h5>General</h5>
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    <label >First Name</label>
                                                    < FormikTextField
                                                        required
                                                        name="firstname"
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label >Middle Name</label>
                                                    < FormikTextField
                                                        required
                                                        name="middlename"
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label >Last Name</label>
                                                    < FormikTextField
                                                        required
                                                        name="lastname"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    <label >Date of Birth</label><br />
                                                    <DatePicker id="example-datepicker" name="dateofbirth" />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label >Gender</label><br />
                                                    <FormikSelect name="gender"
                                                        options={[{ value: "Male", display: "Male" },
                                                        { value: "Female", display: "Female" }]} />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label >Country</label><br />
                                                    <FormikSelect name="country"
                                                        id="country" options={countries} value={initialValues.country} />
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    <label >Phone</label>
                                                    < FormikTextField
                                                        required
                                                        name="phone"
                                                    />
                                                    <label >(999) 999-9999</label>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label >Phone + Ext</label>
                                                    < FormikTextField
                                                        required
                                                        name="phoneext"
                                                    />
                                                    <label >(999) 999-9999 99</label>
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    <label >Email</label>
                                                    < FormikTextField
                                                        required
                                                        name="email"
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label >Address</label>
                                                    <FormikTextarea name="address" />
                                                </div>
                                            </div>
                                            <br />

                                            <div className="form-row" style={{ borderTop: 'solid lightgray 1px', paddingTop: '20px' }}>
                                                <div className="form-group col-md-4">
                                                    <label >Username</label>
                                                    < FormikTextField
                                                        required
                                                        name="username"
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label >Password</label>
                                                    < FormikTextField
                                                        required
                                                        name="password"
                                                        type="password"
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label >Confirm Password</label>
                                                    < FormikTextField
                                                        required
                                                        name="confirmpassword"
                                                        type="password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row" style={{ borderTop: 'solid lightgray 1px', paddingTop: '20px' }}>
                                                <div className="form-group col-md-4">
                                                    <label >Role</label>
                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                        <option>User</option>
                                                        <option>Admin</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 ">
                                        <div className="container background-white margin-20px padding-20px">
                                            <h4 style={{ marginBottom: "30px" }}>Photo</h4>
                                            <label className="control-label">Acceptable image formats are jpg, jpeg, png &amp; gif.</label>
                                            <label className="control-label">Maximum image size allowed is 2MB.</label>

                                            <label htmlFor="file-upload" className="custom-file-upload">
                                                <img src={UploadImage} alt="" />
                                                <p>click here to choose any image</p>
                                            </label>
                                            {/* <input id="file-upload" type="file" /> */}
                                            < FormikTextField
                                                id="file-upload"
                                                type="file"
                                                name="profilePic"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12" style={{ marginRight: "-25px" }}>
                                    <div className="container-fluid background-white margin-20px padding-20px">
                                        <div className="form-row">
                                            <div className="form-group col-md-12 ">
                                                <h5>General</h5>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div class="table-responsive">

                                                <table class="table">

                                                    <thead>
                                                        <tr>
                                                            <th className="tableHeader">Webpage</th>
                                                            <th className="th-lg"><input class="form-check-input" checked={permissions.AddDashboard} type="checkbox" name="1" onChange={handleSelectAll} /> Add</th>
                                                            <th className="th-lg"><input class="form-check-input" checked={permissions.DeleteDashboard} type="checkbox" name="2" onChange={handleSelectAll} /> Delete</th>
                                                            <th className="th-lg"><input class="form-check-input" checked={permissions.ModifyDashboard} type="checkbox" name="Modify" onChange={handleSelectAll} /> Modify</th>
                                                            <th className="th-lg"><input class="form-check-input" checked={permissions.ReadDashboard} type="checkbox" name="Read" onChange={handleSelectAll} /> Read</th>
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

                                                    </thead>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-md-8" style={{ marginRight: "-25px" }}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={!isValid}
                                        color="primary">
                                        Login
                                            </Button>
                                </div>
                            </Form>
                        );
                    }
                }
            </Formik>
        </>
    )
}

export default NewUser
