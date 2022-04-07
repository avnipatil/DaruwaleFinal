import React from "react";

const ShippingForm = ({ label, children, type, minLength,value, maxLength, required, ...otherProps }) => (
  <div>
    {type === "radio" ? (
      <>
        <input className="form-check-input" type={type} minLength={minLength} value={value} maxLength={maxLength} required={required} {...otherProps} />
      </>
    ) : (
      <>
        <input className="form-check-input" type={type}  value={value} {...otherProps} minLength={minLength} maxLength={maxLength}/>
        {label}
      </>
    )}
  </div>
);

export default ShippingForm;