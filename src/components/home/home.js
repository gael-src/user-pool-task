import React from "react";
import "./home.css";
import BasicForm from "../formik/formik";

function Home() {
	return (
		<div className="home__div">
			{/* FORMIK */}
			<BasicForm />
		</div>
	);
}

export default Home;
