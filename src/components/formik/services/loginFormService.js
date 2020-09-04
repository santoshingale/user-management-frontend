import { object, string } from "yup";
import registerRegex from './registerPattern.json'

export const initialValues = {
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    country: '',
    phone: '',
    phoneext: '',
    email: '',
    Address: '',
    username: '',
    password: '',
    confirmpassword: '',
    role: '',
};

export const formSchema = object({
    firstname: string("Enter first name")
        .required("Firstname is required")
        .min(2, "Firstname must have at least 2 characters")
        .matches(registerRegex.username, "Invalid Firstname")
    ,
    middlename: string("Enter middle name")
        .required("Middlename is required")
        .min(2, "Middlename must have at least 2 characters")
        .matches(registerRegex.username, "Invalid Middlename")
    ,
    lastname: string("Enter last name")
        .required("Lastname is required")
        .min(2, "Lastname must have at least 2 characters")
        .matches(registerRegex.username, "Invalid Lastname")
    ,
    phone: string("Enter phone number")
        .required("Phone Number is required")
        .matches(registerRegex.contact, "Invalid Phone number")
    ,

    phoneext: string("Enter phone number")
        .required("Phone Number is required")
        .matches(registerRegex.contact, "Invalid Phone number")
    ,

    username: string("Enter username")
        .required("Username is required")
        .matches(registerRegex.username, "Must contain atleast 2 Letters")
    ,
    email: string("Enter email id")
        .required("Email name is required")
        .matches(registerRegex.email, "Invalid Email Id")
    ,

    password: string("Enter password")
        .required("Password is required")
        .matches(registerRegex.password, "Invalid Password")
    ,
    confirmpassword: string("Enter Confirmation password")
        .required("Confirmation password is required")
        .test('passwords-match', 'Should match with password', function (value) {
            return this.parent.password === value;
        })

});

