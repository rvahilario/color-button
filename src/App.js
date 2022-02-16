import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
	const [buttonColor, setButtonColor] = useState('red');
	const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

	return (
		<div>
			<ColoredButton
				background={buttonColor}
				onClick={() => setButtonColor(newButtonColor)}
			>
				Change to {newButtonColor}
			</ColoredButton>
		</div>
	);
}

export default App;

const ColoredButton = styled.button`
	background-color: ${(props) => (props.background ? props.background : 'red')};
`;
