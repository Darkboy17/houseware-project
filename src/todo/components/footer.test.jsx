// footer.test.jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Footer } from "./footer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer Component", () => {
  // Test Case 1: Check that the "Clear completed" button is rendered when there are completed todos.
  test('renders "Clear completed" button when there are completed todos', () => {
    const mockTodos = [
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: true }, // One completed todo
    ];

    const mockDispatch = jest.fn();

    const { getByText } = render(
      <Router>
        <Footer todos={mockTodos} dispatch={mockDispatch} />
      </Router>
    );

    const clearCompletedButton = getByText("Clear completed");
    expect(clearCompletedButton).toBeInTheDocument();
  });

  // Test Case 2: Confirm that the "Clear completed" button is not rendered when there are no completed todos.
  test('does not render "Clear completed" button when there are no completed todos', () => {
    const mockTodos = [
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: false }, // No completed todos
    ];

    const mockDispatch = jest.fn();

    const { queryByText } = render(
      <Router>
        <Footer todos={mockTodos} dispatch={mockDispatch} />
      </Router>
    );

    const clearCompletedButton = queryByText("Clear completed");
    expect(clearCompletedButton).toBeNull();
  });

  // Test Case 3: Validate that the REMOVE_COMPLETED_ITEMS action is dispatched when the "Clear completed" button is clicked.
  test('dispatches REMOVE_COMPLETED_ITEMS action when "Clear completed" button is clicked', () => {
    const mockTodos = [
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: true }, // One completed todo
    ];

    const mockDispatch = jest.fn();

    const { getByText } = render(
      <Router>
        <Footer todos={mockTodos} dispatch={mockDispatch} />
      </Router>
    );

    const clearCompletedButton = getByText("Clear completed");
    fireEvent.click(clearCompletedButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_COMPLETED_ITEMS",
    });
  });
});
