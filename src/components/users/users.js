import React from "react";
import "./users.css";
import nameIcon from "../../assets/name-icon.png";
import emailIcon from "../../assets/email-icon.png";
import mapIcon from "../../assets/map-icon.png";

class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usersData: [],
			isLoading: false,
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
					isLoading: true,
				});
			})
			.catch((error) => console.log("error:", error));
	}

	render() {
		return (
			<div className="users__div">
				{/* TITLE */}
				<h2 className="users__h2">User Pool</h2>

				{/* CARDS */}
				{this.state.isLoading ? (
					<ul className="users__ul">
						{this.state.usersData.map((item, index) => (
							<li id={`#userID${item.id}`} className="users__li" key={item.id}>
								{/* IMG */}
								<div className="users__pic"></div>
								{/* NAME */}
								<p className="users__name">
									<span>
										<img className="icon__img" src={nameIcon} alt="Name Icon" />
									</span>
									{item.name}
								</p>

								{/* EMAIL */}
								<a className="users__link" href={`mailto:${item.email}`}>
									<span>
										<img className="icon__img" src={emailIcon} alt="Name Icon" />
									</span>
									{item.email}
								</a>

								{/* CITY */}
								<p className="users__city">
									<span>
										<img className="icon__img" src={mapIcon} alt="Name Icon" />
									</span>
									{item.address.city}
								</p>
							</li>
						))}
					</ul>
				) : (
					<p className="loading__p">Loading...</p>
				)}
			</div>
		);
	}
}

export default Users;
