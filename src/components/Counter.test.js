import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import Counter from "./Counter";

test('it shows a button', () => {
    render(<Counter />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
})

test('it does not shows a button', () => {
    render(<Counter />)
    const button = screen.queryByRole('textbox')

    expect(button).not.toBeInTheDocument()
})

