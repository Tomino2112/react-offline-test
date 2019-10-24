import { renderHook } from '@testing-library/react-hooks'
import useLoadGeneration from './useLoadGeneration';
import * as connectors from '../modules/api/connectors';

describe("useLoadGeneration", () => {    
    const origConnector = connectors.getGeneration;

    afterEach(() => {
        connectors.getGeneration = origConnector;
    });

    const getHookInstance = () => {
        const { result, waitForNextUpdate } = renderHook(() => useLoadGeneration());
        return {
            hook: result,
            waitForNextUpdate,
        }
    };    

    test("should return correct state while loading", () => {
        const { hook } = getHookInstance();

        expect(hook.current).toEqual({
            status: "LOADING",
            data: {}
        });
    });

    test("should return correct state when done", async () => {             
        connectors.getGeneration = jest.fn().mockImplementation(() => Promise.resolve());

        const { hook, waitForNextUpdate } = getHookInstance();

        await waitForNextUpdate();

        expect(hook.current).toEqual(expect.objectContaining({
            status: "DONE",
        }));
    });

    test("should return correct state when error", async () => {        
        connectors.getGeneration = jest.fn().mockImplementation(() => Promise.reject());

        const { hook, waitForNextUpdate } = getHookInstance();

        await waitForNextUpdate();

        expect(hook.current).toEqual(expect.objectContaining({
            status: "ERROR"            
        }));
    });
});