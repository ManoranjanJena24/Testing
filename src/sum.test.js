import { sum } from "./sum";

test("testing for sum function", () => {
  expect(sum(10, 10)).toBe(20);
  expect(sum(10, 20)).toBe(30);
});
test("testing for sum function1", () => {
  let a = 10;
  let b = 20;
  let output = 30;
  expect(sum(a, b)).toBe(output);
});
