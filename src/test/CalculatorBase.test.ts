import { addFunction, subFunction, mulFunction, divFunction } from "./CalculatorBase";

test("addFunction", () => {
  const a = 3;
  const b = 4;
  expect(addFunction(a, b)).toEqual(a + b);
});

test("subFunction", () => {
  const a = 10;
  const b = 8;
  expect(subFunction(a, b)).toEqual(a - b);
});

test("mulFunction", () => {
  const a = 6;
  const b = 10;
  expect(mulFunction(a, b)).toEqual(a * b);
});

test("divFunction", () => {
  const a = 7;
  const b = 3;
  expect(divFunction(a, b)).toEqual(a / b);
});

// 숫자 하나가 0일때 error 발생
test("divFunction b is 0", () => {
  const a = 7;
  const b = 0;
  expect(divFunction(a, b)).toEqual(a / b);
});

describe("add and mul Function", () => {
  test("calculate success case", () => {
    const addFunctionResultMockValue = 10;
    const mulValue = 3;
    expect(mulFunction(addFunctionResultMockValue, mulValue)).toEqual(
      addFunctionResultMockValue * mulValue
    );
  });
});
