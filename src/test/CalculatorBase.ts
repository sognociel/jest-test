export const addFunction = (a: number, b: number): number => {
  if (!Number(a)) throw new Error("addFunction. Not supported parameter. a must be a number");
  if (!Number(b)) throw new Error("addFunction. Not supported parameter. b must be a number");
  return a + b;
};

export const subFunction = (a: number, b: number): number => {
  if (!Number(a)) throw new Error("addFunction. Not supported parameter. a must be a number");
  if (!Number(b)) throw new Error("addFunction. Not supported parameter. b must be a number");
  return a - b;
};

export const mulFunction = (a: number, b: number): number => {
  if (!Number(a)) throw new Error("addFunction. Not supported parameter. a must be a number");
  if (!Number(b)) throw new Error("addFunction. Not supported parameter. b must be a number");
  return a * b;
};

export const divFunction = (a: number, b: number): number => {
  if (!Number(a)) throw new Error("addFunction. Not supported parameter. a must be a number");
  if (!Number(b)) throw new Error("addFunction. Not supported parameter. b must be a number");
  return a / b;
};
