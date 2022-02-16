import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
	const [buttonColor, setButtonColor] = useState('red');
	const [isDisabled, setIsDisabled] = useState(false);

	const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

	return (
		<div>
			<ColoredButton
				background={buttonColor}
				onClick={() => setButtonColor(newButtonColor)}
				disabled={isDisabled}
			>
				Change to {newButtonColor}
			</ColoredButton>
			<CheckboxButton
				type="checkbox"
				onChange={(e) => setIsDisabled(e.target.checked)}
			/>
		</div>
	);
}

export default App;

const ColoredButton = styled.button`
	background-color: ${(props) => (props.background ? props.background : 'red')};
`;

const CheckboxButton = styled.input``;
