import React from "react";
import Fuel from "../Fuel/Fuel";
import cs from "classnames";
import "./style.css";

const FuelList = ({ fuels, major = false }) => {
    const className = cs("fuel-list", major && "fuel-list--major");

    return <ul className={className}>
        { fuels.map(fuel => <li key={`card-${fuel.fuel}`}><Fuel name={fuel.fuel} percentage={fuel.perc} /></li>) }
    </ul>
};
 
export default FuelList;