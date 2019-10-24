import React, { useState, useEffect } from "react";
import { getGeneration } from "../modules/api/connectors";

export default () => {
    const [state, setState] = useState({
        status: "LOADING",
        data: {},
    });

    useEffect(() => {
        getGeneration().then(data => {
            setState({
                status: "DONE",
                data
            });
        }).catch(error => {
            setState({
                status: "ERROR",
                data: error
            })
        });    
    }, []);

    return state;
};