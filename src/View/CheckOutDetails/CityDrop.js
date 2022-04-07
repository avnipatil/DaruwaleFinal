import React from "react";

const city = [
    ["Amsterdam", "Amsterdam"],
    ["Berlin", "Berlin"],
    ["Geneve", "Geneve"],
    ["New York", "New York"],
    ["Paris", "Paris"],
];

const CityDrop = ({ label, required, ...others }) => (
    <>
        <label>{label}</label>
        <select {...others} className="form-select" id="checkout-city" required={required}>
            {city.map(([value, name]) => (
                <option value={value}>{name}</option>
            ))}
        </select>
    </>
);

export default CityDrop;
