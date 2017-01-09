import React, { Component } from 'react';

class Sidebar extends Component {

	constructor(props) {
		super(props);
		this.profile = props.profile;
	}

	render() {

		const languages = this.profile.skills.map((skill, index) => <li key={index}>{ skill }</li>);

		return (
			<div className="sidebar">
				<img src="./images/{ this.profile.picture }" alt="{ this.profile.name }" />
				<h3>LANGUAGES</h3>
				<ul>{ languages }</ul>
			</div>
		);
	}

}

export default Sidebar;
