import React from "react";
import "./users.css";

class Users extends React.Component {
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
			<div className="users__div">
				{/* TITLE */}
				<h2 className="users__h2">User Pool</h2>
				<ul className="users__ul">
					{this.state.usersData.map((item, index) => (
						<li className="users__li" key={item.id}>
							<ul className="user__info__ul">
								<li>
									<p className="users__desc">Name: </p>
									<p className="users__name">{item.name}</p>
								</li>
								<li>
									<p className="users__desc">Email: </p>
									<p className="users__email">{item.email}</p>
								</li>
								<li>
									<p className="users__desc">City: </p>
									<p className="users__city">{item.address.city}</p>
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Users;
