import React from "react";

const UsersList = (props) => {
	console.log(props.users);
	const users = props.users.map((user) => (
		<div key={user.login.uuid}>
			<h4>
				{user.name.first} {user.name.last}
			</h4>
			<p>{user.phone}</p>
			<p>{user.email}</p>
		</div>
	));
	return <div>{users}</div>;
};

export default UsersList;
