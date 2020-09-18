import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function About() {
	return (
		<div className="main__pages about__page">
			<h2 className="h2__pages">About</h2>
			<Link className="login__link" to="/user-pool-task/">
				LogIn
			</Link>
		</div>
	);
}

export default About;
