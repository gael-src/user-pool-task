import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./assets/moyyn-logo.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<img className="logo__img" src={logo} alt="Moyyn Logo" />
			<h1>User Pool</h1>
		</div>
	);
}

export default App;
