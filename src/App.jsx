import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

export function replaceCamelCaseWithSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
	const [buttonColor, setButtonColor] = useState('MediumVioletRed');
	const [isDisabled, setIsDisabled] = useState(false);

	const nextEnabledButtonColor =
		buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
	const disabledButtonColor = 'gray';
	const newButtonColor = isDisabled ? disabledButtonColor : buttonColor;

	return (
		<div>
			<ColoMediumVioletRedButton
				background={newButtonColor}
				disabled={isDisabled}
				onClick={() => {
					setButtonColor(nextEnabledButtonColor);
				}}
			>
				Change to {replaceCamelCaseWithSpaces(nextEnabledButtonColor)}
			</ColoMediumVioletRedButton>
			<br />
			<CheckboxButton
				type="checkbox"
				id="disable-button"
				onChange={(e) => setIsDisabled(e.target.checked)}
			/>
			<label htmlFor="disable-button">Disable button</label>
		</div>
	);
}

export default App;

const ColoMediumVioletRedButton = styled.button`
	background-color: ${(props) =>
		props.background ? props.background : 'MediumVioletRed'};
`;

const CheckboxButton = styled.input``;
