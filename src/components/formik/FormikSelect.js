import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";

const FormikSelect = (props) => {
    const [field] = useField(props.name);

    const { onChange } = field;

    const { options, id, selectedValue, ...otherProps } = props;

    return (
            <select
                className="form-control"
                onChange={onChange}
                {...otherProps}
            >
                {options.map((option) => (selectedValue === option.value) ?
                    <option key={option.value} value={option.value}>{option.value}</option> :
                    <option key={option.value} value={option.value}>{option.value}</option> )}
            </select>
    );
};

FormikSelect.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
};

export default FormikSelect;
