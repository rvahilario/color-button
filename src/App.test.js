import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: /change to blue/i });

	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: /change to blue/i });
	fireEvent.click(colorButton);

	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
	expect(colorButton.textContent).toMatch(/change to red/i);
});

test('checkbox initial conditions, button enabled and checkbox disabled', () => {
	render(<App />);

	const colorButton = screen.getByRole('button', { name: /change to blue/i });
	expect(colorButton).toBeEnabled();

	const checkboxButton = screen.getByRole('checkbox');
	expect(checkboxButton).not.toBeChecked();
});

test('checkbox disables button on first click and enables button on second click', () => {
	render(<App />);

	const colorButton = screen.getByRole('button', { name: /change to blue/i });
	const checkboxButton = screen.getByRole('checkbox', {
		name: /disable button/i,
	});

	fireEvent.click(checkboxButton);
	expect(checkboxButton).toBeChecked();
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkboxButton);
	expect(checkboxButton).not.toBeChecked();
	expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
	render(<App />);

	const colorButton = screen.getByRole('button', { name: /change to blue/i });
	const checkboxButton = screen.getByRole('checkbox', {
		name: /disable button/i,
	});

	fireEvent.click(checkboxButton);
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
	fireEvent.click(checkboxButton);
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('Disabled button has gray background and reverts to blue', () => {
	render(<App />);

	const colorButton = screen.getByRole('button', { name: /change to blue/i });
	const checkboxButton = screen.getByRole('checkbox', {
		name: /disable button/i,
	});

	fireEvent.click(colorButton);
	fireEvent.click(checkboxButton);
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
	fireEvent.click(checkboxButton);
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});
