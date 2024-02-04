// item.test.jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Item } from "./item";

describe("Item Component", () => {
  test("toggles the completion status of a todo item", () => {
    const mockDispatch = jest.fn();
    const mockTodo = { id: 1, title: "Test Todo", completed: false };

    const { getByTestId } = render(
      <Item todo={mockTodo} dispatch={mockDispatch} />
    );

    const toggleInput = getByTestId("todo-item-toggle");
    fireEvent.click(toggleInput);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "TOGGLE_ITEM",
      payload: { id: mockTodo.id },
    });
  });

  test("removes a todo item when the destroy button is clicked", () => {
    const mockDispatch = jest.fn();
    const mockTodo = { id: 1, title: "Test Todo", completed: false };

    const { getByTestId } = render(
      <Item todo={mockTodo} dispatch={mockDispatch} />
    );

    const destroyButton = getByTestId("todo-item-button");
    fireEvent.click(destroyButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_ITEM",
      payload: { id: mockTodo.id },
    });
  });

  test("updates the title of a todo item when edited", () => {
    const mockDispatch = jest.fn();
    const mockTodo = { id: 1, title: "Test Todo", completed: false };

    const { getByText, getByTestId } = render(
      <Item todo={mockTodo} dispatch={mockDispatch} />
    );

    // Find the label and double-click to enter edit mode
    const doubleClickLabel = getByText("Test Todo");
    fireEvent.doubleClick(doubleClickLabel);

    // Change the input value and blur the input to trigger the update
    const inputField = getByTestId("text-input");
    fireEvent.change(inputField, { target: { value: "Updated Todo" } });
    fireEvent.blur(inputField);

    // Check if the input field reflects the updated title
    expect(inputField.value).toBe("Updated Todo");
  });
});
