import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sahan portfolio branding', () => {
  render(<App />);
  const logoElements = screen.getAllByText(/Sahan/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
