import React from "react";

const ItemForm = ({ label, children, type, minLength, maxLength, required, ...otherProps }) => (
  <div>
    {type === "text" ? (
      <>
        <input className="form-control" type={type} minLength={minLength} maxLength={maxLength} required={required} {...otherProps} />
      </>
    ) : (
      <>
        <input className="form-control" type={type}  {...otherProps} minLength={minLength} maxLength={maxLength}/>
        {label}
      </>
    )}
  </div>
);

export default ItemForm;