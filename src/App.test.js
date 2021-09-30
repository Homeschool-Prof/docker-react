import { render, screen } from '@testing-library/react';
import App from './App';

test('internet is present', () => {
  render(<App />);
  const internet = screen.getByText("internet");
  expect(internet).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
