import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i); //with getByText
	expect(linkElement).toBeInTheDocument();
});

test('renders learn react link in different way', () => {
	render(<App />);
	const linkElement = screen.getByRole('link', { name: /learn react/i }); //with getByRole
	expect(linkElement).toBeInTheDocument();
});
// Roles Documentation: https://www.w3.org/TR/wai-aria/#role_definitions
