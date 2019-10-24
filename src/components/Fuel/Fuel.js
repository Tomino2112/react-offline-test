import React from "react";
import "../../styles/icons.css";
import "./style.css";
import { ucFirst } from "../../utils";

const Fuel = ({ name, percentage }) => {
    return <div className="fuel">   
        <div className={`icon icon-${name}`}></div>
        <h4>{percentage}</h4>
        <h3>{ucFirst(name)}</h3>
    </div>
};

export default Fuel;