import React from "react";
import { shallow } from "enzyme";
import FuelList from "./FuelList";
import mockData from "../../../example_api_response.json";

describe("FuelList", () => {
    test("should render and match snapshot", () => {
        const wrapper = shallow(<FuelList fuels={mockData.data.generationmix} />);

        expect(wrapper).toMatchSnapshot();
    });

    test("should have extra class for major", () => {
        const wrapper = shallow(<FuelList fuels={mockData.data.generationmix} major />);

        expect(wrapper.find('.fuel-list').hasClass('fuel-list--major')).toBeTruthy()
    });
});