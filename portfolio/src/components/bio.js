import React, { Component } from 'react';

class Bio extends Component {

	constructor(props) {
		super(props);
		this.profile = props.profile;
	}

	render() {
		return (
			<section className="bio">
				<h2>{ this.profile.name }</h2>
				<h3>Profile</h3>
				<p>{ this.profile.bio }</p>
			</section>
		);
	}

}

export default Bio;
