import React from "react";
import "./BtnFetchUsers.css";

const BtnFetchUsers = (props) => {
	return (
		<button className='btn' onClick={props.click}>
			Wylosuj 5 użytkowników
		</button>
	);
};

export default BtnFetchUsers;
