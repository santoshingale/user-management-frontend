import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";


const FormikTextField = (props) => {
    const [field, meta] = useField(props.name);

    const { value, onChange, onBlur } = field;
    const { error, touched } = meta;

    return (
        <>
            <input 
                style={touched && error ? { border: "solid red 1px" } : {}}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                class="form-control"
                error={touched && Boolean(error)
                }
                {...
                props
                }
            />
            {touched && error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : null}
        </>
    )
        ;
};

FormikTextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default FormikTextField;
