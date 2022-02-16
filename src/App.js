import styled from 'styled-components';
import './App.css';

function App() {
	return (
		<div>
			<ColoredButton>Change to blue</ColoredButton>
		</div>
	);
}

export default App;

const ColoredButton = styled.button`
	background-color: red;
`;
