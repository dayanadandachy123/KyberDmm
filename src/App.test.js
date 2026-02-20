// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KyberDmm title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KyberDmm/i);
    expect(titleElement).toBeInTheDocument();
});
