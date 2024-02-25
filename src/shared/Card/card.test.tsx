import { describe, it, expect } from 'vitest';
import { Card } from './Card';
import { render, screen } from '@testing-library/react'

describe("Card component", () => {
    it('loads the card with name and img', () => {
        render(<Card name="test card" imgSrc='testurl' />);
        expect(screen.getByRole('heading')).toHaveTextContent('test card');
        expect(screen.getByRole('img')).toHaveAttribute('src', 'testurl')
    })

    it('loads the card with children', () => {
        render(<Card name="test card" imgSrc='testurl'>
            <p>test children</p>
        </Card>);
        expect(screen.getByText('test children')).toBeInTheDocument();
    })

})