import React from "react";

const Fuel = ({ name, percentage }) => {
    return <>
        <h3>{name}</h3>
        <h4>{percentage}%</h4>
    </>
};

export default Fuel;