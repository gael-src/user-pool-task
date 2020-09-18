import React from "react";
import "./users.css";

class Userpool extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usersData: [],
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
		return (
			<div className="userpool__div">
				{/* TITLE */}
				<h2 className="userpool__h2">User Pool</h2>
				<ul className="userpool__ul">
					{this.state.usersData.map((item, index) => (
						<li className="userpool__li" key={item.id}>
							<p>{item.name}</p>
							<p>{item.email}</p>
							<p>{item.address.city}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Userpool;
