import React, { Component } from 'react';

class Sidebar extends Component {

	constructor(props) {
		super(props);
		this.profile = props.profile;
	}

	render() {
		return (
			<div className="sidebar">
				<img src="./images/{ this.profile.picture }" alt="{ this.profile.name }" />
			</div>
		);
	}

}

export default Sidebar;
