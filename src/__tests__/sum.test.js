import { sum } from "../../sum";

test("Calc sum of two numbers ", () => {
  const result = sum(3, 5);

  //assertion
  expect(result).toBe(8);
});
