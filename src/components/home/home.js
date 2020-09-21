import React from "react";
import "./home.css";
import BasicForm from "../formik/formik";

function Home() {
	return (
		<div className="home__div">
			<h2>Login to view our user pool</h2>
			{/* FORMIK */}
			<BasicForm />
		</div>
	);
}

export default Home;
