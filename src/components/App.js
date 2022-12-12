import React, { Component } from "react";
import "./App.css";
import BtnFetchUsers from "./BtnFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
	state = {
		users: null,
	};

	handleDataFetch = () => {
		// console.log("click");
		fetch(API)
			.then((response) => {
				console.log(response);
				if (response.ok) {
					// console.log("status 200 jest OK");
					return response;
				}
				throw Error(response.status);
			})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({
					users: data.results,
				});
			})
			.catch(() => alert("Error - Try one more time"));
	};

	render() {
		const users = this.state.users;
		return (
			<div className='App'>
				<BtnFetchUsers click={this.handleDataFetch} />
				{users ? <UsersList users={users} /> : users}
			</div>
		);
	}
}

export default App;
