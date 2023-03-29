// import { render, screen } from '@testing-library/react';

// import App from './App';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

import Main from "./components/Main";

test('Renders the initialised timings', () => {
    <MemoryRouter> 
    render(<Main />);
    </MemoryRouter> 
    // const headingElement = screen.getAllByLabelText("Choose time");
    // expect(headingElement).toHaveDisplayValue("17.00");
})

test('Renders the BookingForm heading', () => {
    // <MemoryRouter>
    //     render(<BookingForm />);
    // </MemoryRouter>
    // const headingElement = screen.getByTestId("res-time");
    // expect(headingElement).toBeInTheDocument();
})