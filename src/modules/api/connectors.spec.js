import { getGeneration } from "./connectors";
import { nextTick } from "../../../test-utils/async";
const fetchMock = require("fetch-mock");

describe("connectors", () => {
    afterEach(() => {
        fetchMock.reset();
    });

    describe("getGeneration", () => {
        test("should sort fuels by percentage DESC", async () => {
            fetchMock.get('*', {
                data: {
                    generationmix: [
                        { 
                            fuel: "fuel1",
                            perc: 10.0
                        },
                        { 
                            fuel: "fuel2",
                            perc: 15.0
                        },
                        { 
                            fuel: "fuel3",
                            perc: 8.0
                        }
                    ]
                }                
            });

            const callback = jest.fn();

            getGeneration().then(callback);

            await nextTick();

            expect(callback).toHaveBeenCalledWith({
                generationmix: [
                    { 
                        fuel: "fuel2",
                        perc: 15.0
                    },
                    { 
                        fuel: "fuel1",
                        perc: 10.0
                    },
                    { 
                        fuel: "fuel3",
                        perc: 8.0
                    }
                ]
            });
        });
    });
});