import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import { App } from './App';
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    it('loads the app component with header', () => {
        render(<App name="test pokemon" />);
        expect(screen.getByRole('heading')).toHaveTextContent('test pokemon');
    });

    it('updates the user input', async () => {
        const user = userEvent.setup();
        render(<App name="test pokemon" />);
        expect(screen.getByRole('textbox')).toHaveValue('');
        await user.type(screen.getByRole('textbox'), "charmander");
        expect(screen.getByRole('textbox')).toHaveValue('charmander');
    });
})