import React from "react";
import "./users.css";

class Userpool extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usersData: {},
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
					usersData: result,
				});
			})
			.catch((error) => console.log("error:", error));
	}

	render() {
		let users = [];

		const usersDataObject = this.state.usersData;
		const allUsersObjectKeys = Object.keys(usersDataObject);
		for (let key of allUsersObjectKeys) {
			const objectData = usersDataObject[key];
			if (typeof objectData === "object") {
				const usersValuesArray = Object.values(objectData);
				users.push(usersValuesArray);
			}
		}

		console.log(users);

		return (
			<div className="userpool__div">
				{/* TITLE */}
				<h2>User Pool</h2>
				{/* {users.map((item) => {
					<div>test</div>;
				})} */}
			</div>
		);
	}
}

export default Userpool;
