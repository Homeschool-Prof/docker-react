import { render, screen } from '@testing-library/react';
import App from './App';

test('beer is present', () => {
  render(<App />);
  const beer = screen.getByText(/beer/i);
  expect(beer).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
