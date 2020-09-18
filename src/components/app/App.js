import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../header/header";
import Home from "../home/home";
import Users from "../users/users";

function App() {
	console.log(BrowserRouter)
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/users">
						<Users />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
