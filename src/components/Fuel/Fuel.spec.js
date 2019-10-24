import React from "react";
import { shallow } from "enzyme";
import Fuel from "./Fuel";

describe("Fuel", () => {
    test("should render and match snapshot", () => {
        const wrapper = shallow(<Fuel name={"Foo"} percentage={"10.0"} />);

        expect(wrapper).toMatchSnapshot();
    });
});