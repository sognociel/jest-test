import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Calculator from "./Calculator";

describe("Calculator", () => {
  test("두 개의 숫자 더하기", () => {
    render(<Calculator />);
    const num1Input = screen.getByRole("input", { name: /num1/i });
    const num2Input = screen.getByRole("input", { name: /num2/i });
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "3" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Result: 8")).toBeInTheDocument();
  });
});
