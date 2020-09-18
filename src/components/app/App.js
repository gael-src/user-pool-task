import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "../header/header";
import Home from "../home/home";
import Users from "../users/users";
import About from "../pages/about";
import Contact from "../pages/contact";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/user-pool-task/">
						<Home />
					</Route>
					<Route exact path="/user-pool-task/users">
						<Users />
					</Route>
					<Route exact path="/user-pool-task/about">
						<About />
					</Route>
					<Route exact path="/user-pool-task/contact">
						<Contact />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
