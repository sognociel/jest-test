import { forEach } from "./MockFn";

const mockCallback = jest.fn((x) => 42 + x);

describe("Mock Test", () => {
  beforeEach(() => {
    forEach([0, 1], mockCallback);
  });

  // mock 함수는 두 번 호출됨
  it("forEach mock function toHaveLength", () => {
    expect(mockCallback.mock.calls).toHaveLength(2);
  });

  // forEach의 [0][0]은 0
  it("forEach mock function [0][0] toBe 0", () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  // forEach의 [0][1]은 1
  it("forEach mock function [0][1] toBe 1", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });

  it("forEach mock function results", () => {
    console.log(mockCallback.mock);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
