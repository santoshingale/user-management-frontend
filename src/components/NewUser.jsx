import React from 'react'
import DatePicker from 'react-date-picker';
import UploadImage from '../assets/upload-image.png'
import { Form, Formik } from "formik";
import { FormikTextField } from "./formik";
import { Button } from "@material-ui/core";
import { formSchema, initialValues } from "./formik/services/loginFormService";

const NewUser = () => {
    const submitForm = async (props) => {
        await console.log(props)
    }
    return (
        <>
            <div className="row flex-space-evenly">
                <div className="col-md-8" style={{ marginRight: "-25px" }}>

                    <div className="container-fluid background-white margin-20px padding-20px">

                        <div class="form-row">
                            <div class="form-group col-md-4 ">
                                <h5>General</h5>
                            </div>
                        </div>

                        <Formik initialValues={initialValues}
                            onSubmit={submitForm}
                            validationSchema={formSchema}>
                            {
                                (props) => {
                                    const {
                                        isValid,
                                    } = props;
                                    return (
                                        <form>
                                            <div class="form-row">

                                                <div class="form-group col-md-4">
                                                    <label >First Name</label>
                                                    < FormikTextField
                                                        required
                                                        name="firstname"
                                                    />
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label >Middle Name</label>
                                                    < FormikTextField
                                                        required
                                                        name="middlename"
                                                    />
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label >Last Name</label>
                                                    < FormikTextField
                                                        required
                                                        name="lastname"
                                                    />
                                                </div>
                                            </div>

                                            <div class="form-row">

                                                <div class="form-group col-md-4">
                                                    <label >Date of Birth</label><br />
                                                    <DatePicker id="example-datepicker" name="dateofbirth" />
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label >Gender</label><br />

                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label >Country</label><br />

                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                        <option>India</option>
                                                        <option>Canada</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-row">

                                                <div class="form-group col-md-4">
                                                    <label >Phone</label>
                                                    < FormikTextField
                                                        required
                                                        name="phone"
                                                    />
                                                    <label >(999) 999-9999</label>
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label for="inputPassword4">Phone + Ext</label>
                                                    < FormikTextField
                                                        required
                                                        name="phoneext"
                                                    />
                                                    <label >(999) 999-9999 99</label>
                                                </div>
                                            </div>

                                            <div class="form-row">

                                                <div class="form-group col-md-4">
                                                    <label >Email</label>
                                                    < FormikTextField
                                                        required
                                                        name="email"
                                                    />
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label >Address</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <br />

                                            <div class="form-row" style={{ borderTop: 'solid lightgray 1px', paddingTop: '20px' }}>
                                                <div class="form-group col-md-4">
                                                    <label >Username</label>
                                                    < FormikTextField
                                                        required
                                                        name="username"
                                                    />
                                                </div>

                                                <div class="form-group col-md-4">
                                                    <label >Password</label>
                                                    < FormikTextField
                                                        required
                                                        name="password"
                                                        type="password"
                                                    />
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <label >Confirm Password</label>
                                                    < FormikTextField
                                                        required
                                                        name="confirmpassword"
                                                        type="password"
                                                    />
                                                </div>
                                            </div>

                                            <div class="form-row" style={{ borderTop: 'solid lightgray 1px', paddingTop: '20px' }}>
                                                <div class="form-group col-md-4">
                                                    <label >Role</label>
                                                    <select class="form-control" id="exampleFormControlSelect1">
                                                        <option>User</option>
                                                        <option>Admin</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                disabled={!isValid}
                                                color="primary">
                                                Login
                                            </Button>
                                        </form>

                                    );
                                }
                            }
                        </Formik>

                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="container background-white margin-20px padding-20px">
                        <h4 style={{ marginBottom: "30px" }}>Photo</h4>
                        <label class="control-label">Acceptable image formats are jpg, jpeg, png &amp; gif.</label>
                        <label class="control-label">Maximum image size allowed is 2MB.</label>

                        <label for="file-upload" class="custom-file-upload">
                            <img src={UploadImage} alt="" />
                            <p>click here to choose any image</p>
                        </label>
                        <input id="file-upload" type="file" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewUser
