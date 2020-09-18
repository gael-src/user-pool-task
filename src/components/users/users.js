import React from "react";
import "./users.css";

class Userpool extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
		this.fetchUsersData = this.fetchUsersData.bind(this);
	}

	// FOCUS IN MODAL
	componentDidMount() {
		this.fetchUsersData();
	}

	// POST FIREBASE
	async fetchUsersData() {
		const requestOptions = {
			method: "GET",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json",
			},
		};

		await fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.setState({
					data: result,
				});
			})
			.catch((error) => console.log("error:", error));
	}

	render() {
		const dataValuesArray = Object.values(this.state.data);
		// console.log(dataValuesArray);
		// dataValuesArray.map((item) => {
		// 	// console.log(item);
		// })
		return (
			<div className="userpool__div">
				{/* TITLE */}
				<h2>User Pool</h2>
				
			</div>
		);
	}
}

export default Userpool;
