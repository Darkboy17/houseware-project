// header.test.jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "./header";

describe("Header Component", () => {
  test("renders correctly", () => {
    const mockDispatch = jest.fn();
    const { getByLabelText } = render(<Header dispatch={mockDispatch} />);

    // Check if the header renders
    expect(getByLabelText("New Todo Input")).toBeInTheDocument();
  });

  test("input field is focused on render", () => {
    const mockDispatch = jest.fn();
    const { getByLabelText } = render(<Header dispatch={mockDispatch} />);

    // Check if the input field is focused
    const inputField = getByLabelText("New Todo Input");
    expect(document.activeElement).toEqual(inputField);
  });

  test("accepts and submits text", () => {
    const mockDispatch = jest.fn();
    const { getByLabelText } = render(<Header dispatch={mockDispatch} />);

    // Simulate typing into the input field
    const inputField = getByLabelText("New Todo Input");
    fireEvent.change(inputField, { target: { value: "New Todo" } });

    // Simulate pressing the "Enter" key
    fireEvent.keyDown(inputField, { key: "Enter", code: "Enter" });

    // Check if the dispatch function was called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_ITEM",
      payload: { title: "New Todo" },
    });
  });
});
