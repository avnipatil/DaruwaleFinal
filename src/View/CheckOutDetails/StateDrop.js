import React from "react";

const country = [
  ["Australia", "Australia"],
  ["Canada", "Canada"],
  ["France", "France"],
  ["Germany", "Germany"],
  ["Switzerland", "Switzerland"],
  ["USA", "USA"]
];

const StateDrop = ({ label, required, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others} className="form-select" id="checkout-country" required={required}>
      {country.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default StateDrop;