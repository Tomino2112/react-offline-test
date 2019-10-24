import makeRequest from "./makeRequest";

const sortByFuelPerc = (a, b) => (a.perc < b.perc) ? 1 : -1;

export const getGeneration = () => 
    makeRequest('/generation').then(({ data }) => ({
        ...data,
        generationmix: data.generationmix.sort(sortByFuelPerc)
    }));