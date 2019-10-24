import { ucFirst } from "./utils";

describe("utils", () => {
    describe("ucFirst", () => {
        test("should capitalize first letter of string", () => {
            expect(ucFirst("hello")).toEqual("Hello");
        });
    });
});