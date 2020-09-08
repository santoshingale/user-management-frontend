import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";


const FormikTextField = (props) => {
    const [field, meta] = useField(props.name);
    const { value, onChange, onBlur } = field;

    const { error, touched } = meta;


    return (
        <>
            <div style={{ padding:'0 10px' }}>
                <label>{props.label}</label>
            
            <input
                style={touched && error ? { border: "solid red 1px ",height: '35px' } : {borderRadius: "1px", height: '35px'}}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className="form-control"
                {...props}
            />
            {touched && error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : null}

            {(props.label2 !== undefined) ? 
            <label>{props.label2}</label> : <></>}
            </div>
        </>
    )
;
};

FormikTextField.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FormikTextField;
