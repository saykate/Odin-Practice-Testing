import { calculator }  from "./calculator";

test("should add", () => {
    expect(calculator.add(2, 2)).toEqual(4)
});

test("should subtract", () => {
    expect(calculator.subtract(7, 3)).toEqual(4)
});

test("should divide", () => {
    expect(calculator.divide(16, 4)).toEqual(4)
});

test("should multiply", () => {
    expect(calculator.multiply(3, 4)).toEqual(12)
});