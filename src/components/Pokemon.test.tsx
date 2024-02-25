import { describe, it, expect } from 'vitest';
import { Pokemon } from './Pokemon';
import { render, screen } from '@testing-library/react';

describe("Pokemon component", () => {
    it('search the pokemon with name provided', async () => {
        render(<Pokemon name="bulbasaur" />);

        expect(await screen.findByText("bulbasaur")).toBeInTheDocument();
        expect(await screen.findByText("chlorophyll")).toBeInTheDocument();
    })

    it("handle api error scenario", async () => {
        render(<Pokemon name="bulbas" />);

        expect(screen.queryByText("bulbasaur")).not.toBeInTheDocument();
        expect(await screen.findByText("Something went wrong. Please try again later.")).toBeInTheDocument();
    });
})