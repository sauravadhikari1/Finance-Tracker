import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "../css/CustomInput.css";

const CustomInput = ({ type, placeholder, icon: Icon, controlId,name,onChange }) => {
  return (
    <Form.Group controlId={controlId} className="mb-3">
      <div className="input-icon">
        {Icon && <Icon className="input-icon-left" />}
        <Form.Control
          type={type}
          placeholder={placeholder}
          className="form-input"
          name={name}
          onChange={onChange}
        />
      </div>
    </Form.Group>
  );
};

// Prop types for validation
CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // Icon component (optional)
  controlId: PropTypes.string.isRequired,
};

export default CustomInput;
