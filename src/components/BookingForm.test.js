import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';



test('Renders the No of guest', () => {
    <MemoryRouter>
        render(<BookingForm />);
    </MemoryRouter>
    const headingElement = expect(screen.getAllByText(/Choose date/i))
    expect(headingElement).toBeInTheDocument()
})