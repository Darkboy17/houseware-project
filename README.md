# Test Plan for existing Components

## A) Main Component

  Based on the test cases created by me in the `main.test.jsx` file, here's the test plan:

1. **Rendering**: Verify that the Main component renders correctly without crashing.
    - Description: The test should check if the Main component can be rendered within a MemoryRouter without throwing any errors.
    - Expected Outcome: The Main component should render successfully without any console errors.

2. **Toggle All Todos**: Test the functionality of the "Toggle All" checkbox.
    - Description: When the "Toggle All" checkbox is clicked, all todos should be marked as completed or not completed depending on their current state.
    - Expected Outcome: After clicking the "Toggle All" checkbox, the `dispatch` function should be called with the correct action and payload to toggle the completion status of all todos.

3. **Visible Todos Count**: Test the display of the correct number of visible todos.
    - Description: Depending on the route and the completion status of todos, the Main component should display the correct count of visible todos.
    - Expected Outcome: The count displayed should match the number of todos that meet the criteria for the current route ("/", "/completed", or "/active").

These test cases align with the functionalities described in the `main.test.jsx` file and should help ensure that the Main component behaves as intended.

## B) Header Component
  
  Based on the test cases created by me in the `header.test.jsx` file, here's the test plan:

1. **Rendering**: Verify that the Header component renders correctly without crashing.
    - Description: The test should check if the Header component can be rendered within a Router without throwing any errors.
    - Expected Outcome: The Header component should render successfully without any console errors.

2. **Input Field Focus**: Test that the input field is automatically focused upon rendering.
    - Description: Upon rendering, the input field within the Header component should receive focus.
    - Expected Outcome: The input field should be the active element in the document.

3. **Accepts and Submits Text**: Test that the input field accepts and submits text when the Enter key is pressed.
    - Description: Typing text into the input field and simulating an Enter key press should trigger the dispatch of an action with the typed text as the payload.
    - Expected Outcome: The mock dispatch function should be called with the correct action and payload indicating that a new item has been added.

These test cases correspond to the functionalities tested in the `header.test.jsx` file and should provide a comprehensive suite of tests for the Footer component.

## C) Footer Component

 Based on the test cases created by me in the `footer.test.jsx` file, here's the test plan:

1. **Rendering**: Verify that the Footer component renders correctly without crashing.
    - Description: The test should check if the Footer component can be rendered within a Router without throwing any errors.
    - Expected Outcome: The Footer component should render successfully without any console errors.

2. **Visibility of "Clear Completed" Button**: Test the visibility of the "Clear completed" button based on the presence of completed todos.
    - Description: The "Clear completed" button should only be visible when there are completed todos.
    - Expected Outcome: The button should be present in the DOM when there are completed todos and absent when there are none.

3. **Dispatch Action on Button Click**: Test that clicking the "Clear completed" button dispatches the `REMOVE_COMPLETED_ITEMS` action.
    - Description: When the "Clear completed" button is clicked, it should trigger the dispatch of an action to remove all completed todos.
    - Expected Outcome: The mock dispatch function should be called with the correct action indicating that completed items should be removed.

These test cases correspond to the functionalities tested in the `footer.test.jsx` file and should provide a comprehensive suite of tests for the Footer component.

## D) Input Component
  Based on the test cases created by me in the `input.test.jsx` file, here's the test plan:

1. **Sanitization of Input Text**: Test that the input component sanitizes input text to prevent XSS attacks.
    - Description: When a potentially harmful script is entered into the input field, it should be sanitized and escaped before being submitted.
    - Expected Outcome: The sanitized input should be submitted, with special characters replaced by their HTML entities.

2. **Minimum Character Length Requirement**: Test that the input component does not submit input text below a certain minimum length.
    - Description: If the input text is less than the required minimum length, the submission should be prevented.
    - Expected Outcome: The `onSubmit` callback should not be called when the input text is too short.

3. **Submission of Input Text**: Test that the input component submits input text when the Enter key is pressed.
    - Description: Typing text into the input field and simulating an Enter key press should trigger the submission of the input text.
    - Expected Outcome: The `onSubmit` callback should be called with the correct input text when the Enter key is pressed.

These test cases correspond to the functionalities tested in the `input.test.jsx` file and should provide a comprehensive suite of tests for the Input component.

## E) Item Component

Based on the test cases created by me in the `item.test.jsx` file, here's the test plan:

1. **Toggling Completion Status**: Test that the item's completion status toggles correctly when the toggle input is clicked.
    - Description: Clicking on the toggle input should change the completion status of the todo item and dispatch the appropriate action.
    - Expected Outcome: The `dispatch` function should be called with the correct action and payload to toggle the item's completion status.

2. **Removal of Item**: Test that the item is removed when the destroy button is clicked.
    - Description: Clicking on the destroy button should trigger the removal of the todo item and dispatch the appropriate action.
    - Expected Outcome: The `dispatch` function should be called with the correct action and payload to remove the item.

3. **Updating Title of Todo Item**: Test that the title of a todo item is updated when edited.
    - Description: Double-clicking on the label to enter edit mode, changing the input value, and blurring the input should trigger the update of the todo item's title.
    - Expected Outcome: The input field should reflect the updated title, and the `dispatch` function should be called with the correct action and payload to update the item's title.

These test cases correspond to the functionalities tested in the `item.test.jsx` file and should provide a comprehensive suite of tests for the Item component.


