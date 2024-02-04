import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './input'; // Ensure this import path is correct

describe('Input Component', () => {
 // Test Case 1: Sanitization of Input Text
 test('sanitizes input text', () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<Input onSubmit={mockOnSubmit} />);

    const inputField = getByTestId('text-input');
    fireEvent.change(inputField, { target: { value: '<script>alert("XSS");</script>' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });

    expect(mockOnSubmit).toHaveBeenCalledWith('&lt;script&gt;alert(&quot;XSS&quot;);&lt;&#x2F;script&gt;');
});

 // Test Case 2: Minimum Character Length Requirement
 test('does not submit input text below minimum length', () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<Input onSubmit={mockOnSubmit} />);

    const inputField = getByTestId('text-input');
    fireEvent.change(inputField, { target: { value: 'a' } }); // Less than 2 characters
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });

    expect(mockOnSubmit).not.toHaveBeenCalled();
 });

 // Test Case 3: Submission of Input Text
 test('submits input text when Enter key is pressed', () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<Input onSubmit={mockOnSubmit} />);

    const inputField = getByTestId('text-input');
    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    fireEvent.keyDown(inputField, { key: 'Enter', code: 'Enter' });

    expect(mockOnSubmit).toHaveBeenCalledWith('New Todo');
 });
});