import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";


const FormikTextarea = (props) => {
    const [field, meta] = useField(props.name);

    const { value, onChange, onBlur } = field;

    const { error, touched } = meta;


    return (

        <div style={{ padding: '0 10px' }}>
            <label>{props.label}</label>
            <textarea
                style={touched && error ? { border: "solid red 1px" } : {}}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className="form-control"
                {...props}
                style={{borderRadius: "1px" }}
            />
            {touched && error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : null}
        </div>

    )
        ;
};

FormikTextarea.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FormikTextarea;

