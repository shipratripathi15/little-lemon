import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';



test('Renders the No of guest', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Number of guests");
    expect(headingElement).toBeInTheDocument();
})