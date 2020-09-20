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
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/users">
						<Users />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
