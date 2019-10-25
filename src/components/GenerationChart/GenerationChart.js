import React from "react";
import { ucFirst } from '../../utils';
import { Donut, Legend } from 'britecharts-react';

const GenerationChart = ({ generation }) => {
    const chartData = generation.map(record => ({
        quantity: record.perc,
        percentage: record.perc,
        name: ucFirst(record.fuel),
    }));

    return <>
        <Donut 
            data={chartData}
            width={400}
            height={400}
            externalRadius={200}
            internalRadius={130}
            highlightSliceById={1}
        />
        <Legend
            data={chartData}
            height={400}
            numberFormat={".3"}        
            unit={"%"}
        />
    </>;
}

export default GenerationChart;