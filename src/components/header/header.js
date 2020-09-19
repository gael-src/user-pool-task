import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/moyyn-logo.png";

function Header() {
	return (
		<header className="header__div">
			<Link className="nav__link" to="/user-pool-task">
				{/* LOGO */}
				<img className="logo__img" src={logo} alt="Moyyn Logo" />

				{/* TITLE DISPLAY NONE */}
				<h1>Moyyn</h1>
			</Link>
			<nav className="header__nav">
				<Link className="nav__link" to="/user-pool-task/about">
					About
				</Link>
				<Link className="nav__link" to="/user-pool-task/contact">
					Contact
				</Link>
			</nav>
		</header>
	);
}

export default Header;
