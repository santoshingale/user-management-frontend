import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker';
import UploadImage from '../assets/upload-image.png'
import { Form, Formik } from "formik";
import { FormikTextField, FormikTextarea, FormikSelect } from "./formik";
import { formSchema, initialValues } from "./formik/services/registerFormService";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import apiService from '../helpers/apiService';

const UserForm = ({ permissions, setPermissions }) => {

    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(res => {
                const countries = res.data.map((country) => ({
                    value: country.country,
                }));
                setCountries(countries)
            })
    }, [])

    const [selector, setSelector] = useState({ add: false, modify: false, delete: false, read: false })

    const handleChange = (event) => {
        setPermissions({ ...permissions, [event.target.name]: event.target.checked });
    };

    const [countries, setCountries] = useState([]);


    const handleSelectAll = async (event) => {
        for (let k in permissions) {
            const value = event.target.checked
            if (k.includes(event.target.name)) {
                let key = k.toString()
                setPermissions((prevState) => ({ ...prevState, [key]: value }));
            }
        }
        setSelector({ ...selector, [event.target.name]: event.target.checked })
    }

    const setPermission = () => {
        const e = document.getElementById("role");
        var _role = e.options[e.selectedIndex].value;
        const role = (_role === 'Admin') ? true : false;


        Object.keys(selector).map((value) => {
            let key = value.toString();
            setSelector(prevState => ({ ...prevState, [key]: role }))
        })

        Object.keys(permissions).map((value) => {
            let key = value.toString();
            setPermissions(prevState => ({ ...prevState, [key]: role }))
        })
    }

    const handleRegister = async (props) => {
        let payload = { ...props, ...permissions }
        delete payload.confirmpassword
        const path = "home/register";
        const formData = new FormData();
        formData.append('profilePic', profilePic);
        formData.append('register', JSON.stringify(payload))
        const resp = await apiService.postMultipart(path, formData)
    }

    const [dateOfBirth, setDateOfBirth] = useState()

    const setDate = date => {
        setDateOfBirth(date)
    }

    const [profilePic, setProfilePic] = useState()

    return (
        <>
            <Formik initialValues={initialValues}
                onSubmit={handleRegister}
                validationSchema={formSchema}>
                {
                    (props) => {
                        const {
                            isValid,
                        } = props;
                        return (
                            <Form>

                                <div className="row flex-space-evenly">
                                    <div className="col-md-12 col-lg-8" style={{ marginRight: "-25px" }}>

                                        <div className="container-fluid background-white margin-20px padding-20px">

                                            <div className="form-row">
                                                <div className="form-group col-md-4 ">
                                                    <h5>General</h5>
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="firstname"
                                                        label="First Name"
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="middlename"
                                                        label="Middle Name"
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="lastname"
                                                        label="Last Name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">

                                                    <div style={{ padding: '0 10px' }}>
                                                        <label >Date of Birth</label><br />
                                                        <DatePicker onChange={setDate} value={dateOfBirth}
                                                            name="dateofbirth" />
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <FormikSelect name="gender"
                                                        label="Gender"
                                                        options={[{ value: "Male", display: "Male" },
                                                        { value: "Female", display: "Female" }]} />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <FormikSelect name="country"
                                                        label="Country"
                                                        id="country" options={countries} value={initialValues.country} />
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="phone"
                                                        label="Phone"
                                                        label2="(999) 999-9999"
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="phoneext"
                                                        label="Phone + Ext"
                                                        label2="(999) 999-9999 99"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="email"
                                                        label="Email"
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <FormikTextarea name="address"
                                                        label="Address" />
                                                </div>
                                            </div>
                                            <br />

                                            <div className="form-row" style={{ borderTop: 'solid lightgray 1px', paddingTop: '20px' }}>
                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="username"
                                                        label="Username"
                                                    />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="password"
                                                        type="password"
                                                        label="Password"
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    < FormikTextField
                                                        required
                                                        name="confirmpassword"
                                                        type="password"
                                                        label="Confirm Password"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row" style={{ borderTop: 'solid lightgray 1px', paddingTop: '20px' }}>
                                                <div className="form-group col-md-4">
                                                    <FormikSelect name="gender"
                                                        label="Role"
                                                        id="role"
                                                        options={[{ value: "User", display: "User" },
                                                        { value: "Admin", display: "Admin" }]} onChange={setPermission}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-sm-12 col-md-12 col-lg-4 ">
                                        <div className="container background-white margin-20px padding-20px" >
                                            <h4 style={{ marginBottom: "30px" }}>Photo</h4>
                                            <label className="control-label">Acceptable image formats are jpg, jpeg, png &amp; gif.</label>
                                            <label className="control-label">Maximum image size allowed is 2MB.</label>




                                            <label htmlFor="file-upload" className="custom-file-upload"
                                                style={profilePic === '' ? {} : { background: `${profilePic}` }}>
                                                <img src={UploadImage} alt="" />
                                                <p>click here to choose any image</p>
                                            </label>




                                            < input
                                                id="file-upload"
                                                type="file"
                                                name="profilePic"
                                                onChange={(e) => setProfilePic(e.target.files[0])}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12" style={{ marginRight: "-25px" }}>
                                    <div className="container-fluid background-white margin-20px padding-20px">
                                        <div className="form-row">
                                            <div className="form-group col-md-12 ">
                                                <h5>General</h5>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div class="table-responsive">

                                                <table className="table">
                                                    <thead>

                                                        <tr>
                                                            <th className="tableHeader">Webpage</th>
                                                            <th className="th-lg"><input type="checkbox" checked={selector.add} name="add" onChange={handleSelectAll} /> Add</th>
                                                            <th className="th-lg"><input type="checkbox" checked={selector.delete} name="delete" onChange={handleSelectAll} /> Delete</th>
                                                            <th className="th-lg"><input type="checkbox" checked={selector.modify} name="modify" onChange={handleSelectAll} /> Modify</th>
                                                            <th className="th-lg"><input type="checkbox" checked={selector.read} name="read" onChange={handleSelectAll} /> Read</th>
                                                        </tr>

                                                        <tr>
                                                            <td className="tableHeader">
                                                                Dashboard</td>
                                                            <td className="th-lg"><input checked={permissions.addDashboard} type="checkbox" name="addDashboard" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.deleteDashboard} type="checkbox" name="deleteDashboard" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.modifyDashboard} type="checkbox" name="modifyDashboard" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.readDashboard} type="checkbox" name="readDashboard" onChange={handleChange} /> </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="tableHeader">Settings</td>
                                                            <td className="th-lg"><input checked={permissions.addSettings} type="checkbox" name="addSettings" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.deleteSettings} type="checkbox" name="deleteSettings" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.modifySettings} type="checkbox" name="modifySettings" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.readSettings} type="checkbox" name="readSettings" onChange={handleChange} /> </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="tableHeader">Users Information</td>
                                                            <td className="th-lg"><input checked={permissions.addUsersInformation} type="checkbox" name="addUsersInformation" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.deleteUsersInformation} type="checkbox" name="deleteUsersInformation" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.modifyUsersInformation} type="checkbox" name="modifyUsersInformation" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.readUsersInformation} type="checkbox" name="readUsersInformation" onChange={handleChange} /> </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="tableHeader">Web Page 1</td>
                                                            <td className="th-lg"><input checked={permissions.addWebPage1} type="checkbox" name="addWebPage1" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.deleteWebPage1} type="checkbox" name="deleteWebPage1" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.modifyWebPage1} type="checkbox" name="modifyWebPage1" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.readWebPage1} type="checkbox" name="readWebPage1" onChange={handleChange} /> </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="tableHeader">
                                                                Web Page 2</td>
                                                            <td className="th-lg"><input checked={permissions.addWebPage2} type="checkbox" name="addWebPage2" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.deleteWebPage2} type="checkbox" name="deleteWebPage2" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.modifyWebPage2} type="checkbox" name="modifyWebPage2" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.readWebPage2} type="checkbox" name="readWebPage2" onChange={handleChange} /> </td>
                                                        </tr>

                                                        <tr>
                                                            <td className="tableHeader">
                                                                Web Page 3</td>
                                                            <td className="th-lg"><input checked={permissions.addWebPage3} type="checkbox" name="addWebPage3" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.deleteWebPage3} type="checkbox" name="deleteWebPage3" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.modifyWebPage3} type="checkbox" name="modifyWebPage3" onChange={handleChange} /> </td>
                                                            <td className="th-lg"><input checked={permissions.readWebPage3} type="checkbox" name="readWebPage3" onChange={handleChange} /> </td>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="col-md-12 flex-space-evenly" style={{ marginRight: "-25px", marginBottom: "30px" }}>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Submit
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

export default UserForm
