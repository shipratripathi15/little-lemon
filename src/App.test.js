// import { render, screen } from '@testing-library/react';

// import App from './App';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';



test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Number of guests");
    expect(headingElement).toBeInTheDocument();
})