import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function Contact() {
	return (
		<div className="main__pages contact__page">
			<h2 className="h2__pages">Contact</h2>
			<Link className="login__link" to="/user-pool-task">
				LogIn
			</Link>
		</div>
	);
}

export default Contact;
