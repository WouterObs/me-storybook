import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonProps } from "./components/Button/Button";

const onClicked = () => {
	console.info("Buttone Clicked!");
};
const App: React.FC = () => {
	/**
	 * ToDo: Remove ButtonProps && the Button component asap. Only to test!
	 */
	const props: ButtonProps = {
		primary: true,
		label: "Button",
		size: "medium",
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<Button
				label={props.label}
				primary={props.primary}
				size={props.size}
				onClick={onClicked}
			/>
		</div>
	);
};

export default App;
