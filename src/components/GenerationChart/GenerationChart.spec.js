import React from "react";
import { shallow } from "enzyme";
import GenerationChart from "./GenerationChart";
import mockData from "../../../example_api_response.json";

describe("GenerationChart", () => {
    test("should render and match snapshot", () => {
        const wrapper = shallow(<GenerationChart generation={mockData.data.generationmix} />);

        expect(wrapper).toMatchSnapshot();
    });
});