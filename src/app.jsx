import React from 'react';
import useLoadGeneration from './hooks/useLoadGeneration';
import FuelList from './components/FuelList/FuelList';
import "./styles/main.css";

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

    return <div className={"content"}>        
        <h1>Generation Mix for the GB power system </h1>
        <h2>{generationReq.data.from} - {generationReq.data.to}</h2>
        <section>
            <FuelList fuels={majorFuels} major />
            <FuelList fuels={minorFuels} />
        </section>
    </div>;
};

export default App;