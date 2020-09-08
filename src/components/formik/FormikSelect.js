import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";

const FormikSelect = (props) => {
    const [field] = useField(props.name);

    const { onChange } = field;

    const { options, id, selectedValue, ...otherProps } = props;

    return (
        <>
       <div style={{  padding:'0 10px' }}>
            <label>{props.label}</label>
        <select
            className="form-control"
            onChange={onChange}
            {...otherProps}
            style={{ borderRadius: "1px", height: '35px' }}
            id={id}
        >
            {options.map((option) => (selectedValue === option.value) ?
                <option  key={option.value} value={option.value}>{option.value}</option> :
                <option key={option.value} value={option.value}>{option.value}</option>)}
        </select>
        </div>
        </>
    );
};

FormikSelect.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
};

export default FormikSelect;
