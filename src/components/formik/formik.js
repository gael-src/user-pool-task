import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import "./formik.css";

function BasicForm() {
	// REDIRECT TO /USERS AFTER LOGIN
	let history = useHistory();
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = "Email required";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = "Invalid email address";
				} else if (values.password.length < 7) {
					errors.password = "Minimum 8 characters";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					// CREATE USER REDIRECTION ON SUBMIT
					history.push("/users");

					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<form className="main__form" onSubmit={handleSubmit}>
					<legend className="legend__form">
						<h2>Login to view our user pool</h2>
					</legend>

					<input
						className="input__form"
						type="email"
						name="email"
						placeholder="email..."
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					<p className="error__p">
						{errors.email && touched.email && errors.email}
					</p>

					<input
						className="input__form"
						type="password"
						name="password"
						placeholder="password..."
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					<p className="error__p">
						{errors.password && touched.password && errors.password}
					</p>

					<button
						className="button__form"
						type="submit"
						disabled={isSubmitting}
					>
						LogIn
					</button>
				</form>
			)}
		</Formik>
	);
}

export default BasicForm;
