import React from 'react';
import useLoadGeneration from './hooks/useLoadGeneration';
import { ucFirst } from './utils';

const App = () => {
    const generationReq = useLoadGeneration();

    if (generationReq.status === "LOADING") {
        return <h1>Loading...</h1>;
    }

    if (generationReq.status === "ERROR") {
        return <h1>Error: { generationReq.data.message }</h1>;
    }

    const majorFuels = generationReq.data.generationmix.slice(0, 3);
    const minorFuels = generationReq.data.generationmix.slice(3);

    return <>
        <h1>Generation Mix for the GB power system ({generationReq.data.from} - {generationReq.data.to})</h1>
        <ul>
            { majorFuels.map(record => 
                <MajorFuel key={record.fuel} name={ucFirst(record.fuel)} perc={record.perc} />) }
        </ul>

        <ul>
            { minorFuels.map(record => 
                <MinorFuel key={record.fuel} name={ucFirst(record.fuel)} perc={record.perc} />) }
        </ul>
    </>;
};

const MajorFuel = ({ name, perc }) => {
    return <>
        <h3>{name}</h3>
        <h4>{perc}%</h4>
    </>
}

const MinorFuel = ({ name, perc }) => {
    return <>
        <h4>{name}</h4>
        <h5>{perc}%</h5>
    </>
}

export default App;