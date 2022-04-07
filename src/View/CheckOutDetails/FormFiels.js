import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export function FormField({ children, label, name, ShipCharge,ShpName }) {
  return (
    <div>
      <div className="d-block" htmlFor={name}>{label}</div>
      {children} {ShipCharge} {ShpName}
    </div>
  );
}

FormField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  ShpName: propTypes.string
  // ShipCharge: PropTypes.number
};
