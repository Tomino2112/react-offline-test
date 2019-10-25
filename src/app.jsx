import React from 'react';
import useLoadGeneration from './hooks/useLoadGeneration';
import FuelList from './components/FuelList/FuelList';
import GenerationChart from './components/GenerationChart/GenerationChart';
import moment from 'moment';
import "./styles/main.css";

const formatDate = date => moment(date).format("L LT");

const App = () => {
    const generationReq = useLoadGeneration();

    if (generationReq.status === "LOADING") {
        return <h1 className={"loading pulsate"}>Loading...</h1>;
    }

    if (generationReq.status === "ERROR") {
        return <div className={"content"}><h1>Error: { generationReq.data.message }</h1></div>;
    }

    const majorFuels = generationReq.data.generationmix.slice(0, 3);
    const minorFuels = generationReq.data.generationmix.slice(3);    

    return <div className={"content"}>        
        <h1>Generation Mix for the GB power system </h1>
        <h2>{formatDate(generationReq.data.from)} - {formatDate(generationReq.data.to)}</h2>
        <section>
            <FuelList fuels={majorFuels} major />
            <FuelList fuels={minorFuels} />
        </section>
        <section className={"charts"}>        
            <GenerationChart generation={generationReq.data.generationmix} />
        </section>
    </div>;
};

export default App;