import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [num, setNum] = useState({
    num1: 0,
    num2: 0,
  });

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum({
      ...num,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const fn = {
    add: () => {
      const sum = num.num1 + num.num2;
      setResult(sum);
    },
    sub: () => {
      const sub = num.num1 - num.num2;
      setResult(sub);
    },
    mul: () => {
      const mul = num.num1 * num.num2;
      setResult(mul);
    },
    div: () => {
      const div = num.num1 / num.num2;
      setResult(div);
    },
  };

  // // 더하기
  // const handleAdd = () => {
  //   const sum = parseInt(num.num1) + parseInt(num.num2);
  //   setResult(sum);
  // };

  // // 빼기
  // const handleSub = () => {
  //   const sub = parseInt(num.num1) - parseInt(num.num2);
  //   setResult(sub);
  // };

  // // 곱하기
  // const handleMul = () => {
  //   const mul = parseInt(num.num1) * parseInt(num.num2);
  //   setResult(mul);
  // };

  // // 나누기
  // const handleDiv = () => {
  //   const div = parseInt(num.num1) / parseInt(num.num2);
  //   setResult(div);
  // };

  return (
    <div>
      <input type="number" name="num1" value={num.num1} onChange={handleNumChange} />
      <input type="number" name="num2" value={num.num2} onChange={handleNumChange} />
      <button onClick={fn.add}>Add</button>
      <button onClick={fn.sub}>Sub</button>
      <button onClick={fn.mul}>Mul</button>
      <button onClick={fn.div}>Div</button>
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
};

export default Calculator;
