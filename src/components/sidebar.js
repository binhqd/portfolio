import React, { Component } from 'react';

class Sidebar extends Component {

	constructor(props) {
		super(props);
		this.profile = props.profile;
	}

	render() {

		if( !this.profile.contact ) {
			return <div></div>;
		}

		return (
			<div className="sidebar-wrapper">

	            <div className="profile-container">
	                <img className="profile" src="./images/ilbesculpi.png" alt="" />
	                <h1 className="name">{ this.profile.name }</h1>
	                <h3 className="tagline">{ this.profile.tagline }</h3>
	            </div>

				<div className="contact-container container-block">
	                <ul className="list-unstyled contact-list">
	                    <li className="email">
							<i className="fa fa-envelope"></i>
							<a href={ this.profile.contact.email.action }>{ this.profile.contact.email.display }</a>
						</li>
	                    <li className="phone">
							<i className="fa fa-phone"></i>
							<a href={ this.profile.contact.phone.action }>{ this.profile.contact.phone.display }</a>
						</li>
	                    <li className="website">
							<i className="fa fa-globe"></i>
							<a href={ this.profile.contact.website.action } target="_blank">{ this.profile.contact.website.display }</a>
						</li>
	                    <li className="linkedin">
							<i className="fa fa-linkedin"></i>
							<a href={ this.profile.contact.linkedin.action } target="_blank">{ this.profile.contact.linkedin.display }</a>
						</li>
	                    <li className="github">
							<i className="fa fa-github"></i>
							<a href={ this.profile.contact.github.action } target="_blank">{ this.profile.contact.github.display }</a>
						</li>
	                    <li className="twitter">
							<i className="fa fa-twitter"></i>
							<a href={ this.profile.contact.twitter.action } target="_blank">@{ this.profile.contact.twitter.display }</a>
						</li>
	                </ul>
	            </div>

			</div>
		);
	}

}

export default Sidebar;
