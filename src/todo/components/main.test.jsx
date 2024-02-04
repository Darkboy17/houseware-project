import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Main } from "./main";

describe("Main Component", () => {
  // Test Case 1: Renders without crashing
  test("renders without crashing", () => {
    const mockDispatch = jest.fn();
    const mockTodos = [{ id: 1, text: "Todo 1", completed: false }];
    render(
      <MemoryRouter>
        <Main todos={mockTodos} dispatch={mockDispatch} />
      </MemoryRouter>
    );
  });

  // Test Case 2: Displays correct number of visible todos
  test("displays correct number of visible todos", () => {
    const mockDispatch = jest.fn();
    const mockTodos = [
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: true },
    ];

    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={<Main todos={mockTodos} dispatch={mockDispatch} />}
          />
          <Route
            path="/completed"
            element={<Main todos={mockTodos} dispatch={mockDispatch} />}
          />
          <Route
            path="/active"
            element={<Main todos={mockTodos} dispatch={mockDispatch} />}
          />
        </Routes>
      </MemoryRouter>
    );

    let todoList = getByTestId("todo-list");
    expect(todoList.children.length).toBe(2); // Two todos initially

    // Since React Testing Library does not directly support testing React Router navigation,
    // you might need to simulate route changes differently or test the component's response to prop changes.
  });

  // Test Case 3: Toggles all todos when "Toggle All" checkbox is clicked
  test('toggles all todos when "Toggle All" checkbox is clicked', () => {
    const mockDispatch = jest.fn();
    const mockTodos = [
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: false },
    ];
    const { getByTestId } = render(
      <MemoryRouter>
        <Main todos={mockTodos} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const toggleAllCheckbox = getByTestId("toggle-all");
    fireEvent.click(toggleAllCheckbox);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "TOGGLE_ALL",
      payload: { completed: true },
    });
  });
});
